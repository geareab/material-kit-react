import { BottomNavigation } from '@mui/material';
// ----------------------------------------------------------------------
const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
};
export default function BottomBar() {
  return <BottomNavigation style={styles.stickToBottom} />;
}
