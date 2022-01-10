import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';

// material
import {
  Card,
  Grid,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  CircularProgress,
  TableContainer
} from '@mui/material';
// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../components/_dashboard/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'location', label: 'Location', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

function applySortFilter(array, query) {
  console.log(query);
  return filter(
    array,
    (_user) =>
      _user.name
        .toLowerCase()
        .split(' ')
        .join('')
        .indexOf(query.toLowerCase().split(' ').join('')) !== -1 &&
      _user.name
        .toLowerCase()
        .split(' ')
        .join('')
        .indexOf(query.toLowerCase().split(' ').join('')) < 1
  );
}

export default function User() {
  const [filterName, setFilterName] = useState('');
  const [USERLIST, setUSERLIST] = useState([]);
  const [loadingItems, setLoadingitems] = useState(true);
  const [firstSearch, setFirstSearch] = useState(true);

  // we will use async/await to fetch this data

  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch(`https://smed-backend.herokuapp.com/item/~~`, {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcklEIjoiNjFkNmM1MWQ2NzRkYWJlMmExZjdkM2EwIiwiaWF0IjoxNjQxNzYxMTI3LCJleHAiOjE2NDE4NDc1Mjd9.dEmfEvJEHOG4miZDyrUPGAeq4qGSumRJa6EV8NcWg-0'
        }
      });
      const data = await response.json();
      console.log(data);
      setLoadingitems(false);
      // store the data into our books variable
      setUSERLIST(data.item);
    }
  }, []);
  const handleFilterByName = (event) => {
    setFilterName(event.target.value);

    setFirstSearch(false);
    if (event.target.value === '') {
      setFirstSearch(true);
    }
  };

  const filteredUsers = applySortFilter(USERLIST, filterName).slice(0, 30);
  const isUserNotFound = filteredUsers.length === 0;

  return (
    <Page title="User | Minimal-UI">
      {loadingItems && (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
        >
          <CircularProgress size="5rem" />
        </Grid>
      )}
      {!loadingItems && (
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Simran Medicos
            </Typography>
            <Button
              variant="contained"
              component={RouterLink}
              to="#"
              startIcon={<Icon icon={plusFill} />}
            >
              New Medicine
            </Button>
          </Stack>

          <Card>
            <UserListToolbar filterName={filterName} onFilterName={handleFilterByName} />

            <Scrollbar>
              <TableContainer sx={{ minWidth: 500 }}>
                <Table>
                  <UserListHead headLabel={TABLE_HEAD} rowCount={USERLIST.length} />
                  {!firstSearch && (
                    <TableBody>
                      {filteredUsers.map((row) => {
                        const { _id, name, company, location } = row;
                        return (
                          <TableRow key={_id} tabIndex={-1}>
                            <TableCell align="left">
                              <b>{name}</b>
                            </TableCell>
                            <TableCell align="left">{location}</TableCell>
                            <TableCell align="left">{company}</TableCell>

                            <TableCell align="right">
                              <UserMoreMenu />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  )}

                  {isUserNotFound && (
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                          <SearchNotFound searchQuery={filterName} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </Scrollbar>
          </Card>
        </Container>
      )}
    </Page>
  );
}
