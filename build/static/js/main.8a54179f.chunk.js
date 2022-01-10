(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[0],{415:function(e,t,a){"use strict";a.r(t);a(256);var n=a(63),r=a.n(n),i=a(35),o=a(105),c=a(15),p=a(4),s=a(5),x=a(1),l=Object(s.a)("div")({display:"flex",minHeight:"100%",overflow:"hidden"}),d=Object(s.a)("div")((function(e){var t=e.theme;return Object(p.a)({flexGrow:1,overflow:"auto",minHeight:"100%",paddingTop:24,paddingBottom:t.spacing(10)},t.breakpoints.up("lg"),{paddingTop:24,paddingLeft:t.spacing(2),paddingRight:t.spacing(2)})}));function b(){return Object(x.jsx)(l,{children:Object(x.jsx)(d,{children:Object(x.jsx)(c.b,{})})})}var h=a(475),j=a(455),u=a(122),g=a(11),m=a(62),O=a(6),f=a.n(O),y=a(0),v=a(469),F=["children","title"],w=Object(y.forwardRef)((function(e,t){var a=e.children,n=e.title,r=void 0===n?"":n,i=Object(m.a)(e,F);return Object(x.jsxs)(v.a,Object(g.a)(Object(g.a)({ref:t},i),{},{children:[Object(x.jsx)(o.a,{children:Object(x.jsx)("title",{children:r})}),a]}))}));w.propTypes={children:f.a.node.isRequired,title:f.a.string};var k=w,C=a(13),S=a(121),B=a(120),z=a(45),A=a(229),I=a.n(A),M=a(230),W=a.n(M),E=a(462),T=a(471),D=a(472),H=a(484);function R(){var e=Object(c.g)(),t=Object(y.useState)(!1),a=Object(C.a)(t,2),n=a[0],r=a[1],i=S.a().shape({email:S.b().required("Username is required"),password:S.b().required("Password is required")}),o=Object(B.c)({initialValues:{email:"",password:"",remember:!0},validationSchema:i,onSubmit:function(){e("/dashboard",{replace:!0})}}),p=o.errors,s=o.touched,l=o.isSubmitting,d=o.handleSubmit,b=o.getFieldProps;return Object(x.jsx)(B.b,{value:o,children:Object(x.jsxs)(B.a,{autoComplete:"off",noValidate:!0,onSubmit:d,children:[Object(x.jsxs)(j.a,{spacing:3,children:[Object(x.jsx)(E.a,Object(g.a)(Object(g.a)({fullWidth:!0,autoComplete:"username",type:"email",label:"Username"},b("email")),{},{error:Boolean(s.email&&p.email),helperText:s.email&&p.email})),Object(x.jsx)(E.a,Object(g.a)(Object(g.a)({fullWidth:!0,autoComplete:"current-password",type:n?"text":"password",label:"Password"},b("password")),{},{InputProps:{endAdornment:Object(x.jsx)(T.a,{position:"end",children:Object(x.jsx)(D.a,{onClick:function(){r((function(e){return!e}))},edge:"end",children:Object(x.jsx)(z.a,{icon:n?I.a:W.a})})})},error:Boolean(s.password&&p.password),helperText:s.password&&p.password}))]}),Object(x.jsx)(j.a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{my:2}}),Object(x.jsx)(H.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:l,children:"Login"})]})})}var P=Object(s.a)(k)((function(e){var t=e.theme;return Object(p.a)({},t.breakpoints.up("md"),{display:"flex"})})),N=Object(s.a)("div")((function(e){return{maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0)}}));function L(){return Object(x.jsx)(P,{title:"Login | Minimal-UI",children:Object(x.jsx)(h.a,{maxWidth:"sm",children:Object(x.jsxs)(N,{children:[Object(x.jsxs)(j.a,{sx:{mb:5},children:[Object(x.jsx)(u.a,{variant:"h4",gutterBottom:!0,children:"Sign in to Simran Medicos"}),Object(x.jsx)(u.a,{sx:{color:"text.secondary"},children:"Enter your details below."})]}),Object(x.jsx)(R,{})]})})})}var J=a(156),U=a.n(J),G=a(231),q=a(114),Q=a(232),V=a.n(Q),X=a(467),Y=a(474),Z=a(473),_=a(480),$=a(481),K=a(482),ee=a(483),te=a(477),ae=a(478),ne=a(239),re=a(453),ie=["children","sx"],oe=Object(s.a)("div")({flexGrow:1,height:"100%",overflow:"hidden"}),ce=Object(s.a)(ne.a)((function(e){var t=e.theme;return{maxHeight:"100%","& .simplebar-scrollbar":{"&:before":{backgroundColor:Object(re.a)(t.palette.grey[600],.48)},"&.simplebar-visible:before":{opacity:1}},"& .simplebar-track.simplebar-vertical":{width:10},"& .simplebar-track.simplebar-horizontal .simplebar-scrollbar":{height:6},"& .simplebar-mask":{zIndex:"inherit"}}}));function pe(e){var t=e.children,a=e.sx,n=Object(m.a)(e,ie);return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?Object(x.jsx)(v.a,Object(g.a)(Object(g.a)({sx:Object(g.a)({overflowX:"auto"},a)},n),{},{children:t})):Object(x.jsx)(oe,{children:Object(x.jsx)(ce,Object(g.a)(Object(g.a)({timeout:500,clickOnTrack:!1,sx:a},n),{},{children:t}))})}var se=a(470),xe=["searchQuery"];function le(e){var t=e.searchQuery,a=void 0===t?"":t,n=Object(m.a)(e,xe);return Object(x.jsxs)(se.a,Object(g.a)(Object(g.a)({},n),{},{children:[Object(x.jsx)(u.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(x.jsxs)(u.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(x.jsxs)("strong",{children:['"',a,'"']}),". Try checking for typos or using complete words."]})]}))}var de=a(476);function be(e){var t=e.headLabel;return Object(x.jsx)(de.a,{children:Object(x.jsx)(te.a,{children:t.map((function(e){return Object(x.jsx)(ae.a,{children:Object(x.jsx)("b",{children:e.label})},e.id)}))})})}var he=a(234),je=a.n(he),ue=a(479),ge=a(465),me=Object(s.a)(ue.a)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}})),Oe=Object(s.a)(ge.a)((function(e){var t=e.theme;return{width:"70%",transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:"100%",boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function fe(e){var t=e.numSelected,a=e.filterName,n=e.onFilterName;return Object(x.jsx)(me,{sx:Object(g.a)({},t>0&&{color:"primary.main",bgcolor:"primary.lighter"}),children:t>0?Object(x.jsxs)(u.a,{component:"div",variant:"subtitle1",children:[t," selected"]}):Object(x.jsx)(Oe,{value:a,onChange:n,placeholder:"Search medicines...",startAdornment:Object(x.jsx)(T.a,{position:"start",children:Object(x.jsx)(v.a,{component:z.a,icon:je.a,sx:{color:"text.disabled"}})})})})}var ye=a(235),ve=a.n(ye),Fe=a(236),we=a.n(Fe),ke=a(237),Ce=a.n(ke),Se=a(240),Be=a(466),ze=a(457),Ae=a(458);function Ie(){var e=Object(y.useRef)(null),t=Object(y.useState)(!1),a=Object(C.a)(t,2),n=a[0],r=a[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(D.a,{ref:e,onClick:function(){return r(!0)},children:Object(x.jsx)(z.a,{icon:Ce.a,width:20,height:20})}),Object(x.jsxs)(Se.a,{open:n,anchorEl:e.current,onClose:function(){return r(!1)},PaperProps:{sx:{width:200,maxWidth:"100%"}},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(x.jsxs)(Be.a,{sx:{color:"text.secondary"},children:[Object(x.jsx)(ze.a,{children:Object(x.jsx)(z.a,{icon:we.a,width:24,height:24})}),Object(x.jsx)(Ae.a,{primary:"Delete",primaryTypographyProps:{variant:"body2"}})]}),Object(x.jsxs)(Be.a,{component:i.b,to:"#",sx:{color:"text.secondary"},children:[Object(x.jsx)(ze.a,{children:Object(x.jsx)(z.a,{icon:ve.a,width:24,height:24})}),Object(x.jsx)(Ae.a,{primary:"Edit",primaryTypographyProps:{variant:"body2"}})]})]})]})}var Me=[{id:"name",label:"Name",alignRight:!1},{id:"location",label:"Location",alignRight:!1},{id:"company",label:"Company",alignRight:!1},{id:""}];function We(){var e=Object(y.useState)(""),t=Object(C.a)(e,2),a=t[0],n=t[1],r=Object(y.useState)([]),o=Object(C.a)(r,2),c=o[0],p=o[1],s=Object(y.useState)(!0),l=Object(C.a)(s,2),d=l[0],b=l[1],g=Object(y.useState)(!0),m=Object(C.a)(g,2),O=m[0],f=m[1];Object(y.useEffect)((function(){function e(){return(e=Object(G.a)(U.a.mark((function e(){var t,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://smed-backend.herokuapp.com/item/~~",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcklEIjoiNjFkNmM1MWQ2NzRkYWJlMmExZjdkM2EwIiwiaWF0IjoxNjQxNzYxMTI3LCJleHAiOjE2NDE4NDc1Mjd9.dEmfEvJEHOG4miZDyrUPGAeq4qGSumRJa6EV8NcWg-0"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),b(!1),p(a.item);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var v,F,w=(v=c,F=a,console.log(F),Object(q.filter)(v,(function(e){return-1!==e.name.toLowerCase().split(" ").join("").indexOf(F.toLowerCase().split(" ").join(""))&&e.name.toLowerCase().split(" ").join("").indexOf(F.toLowerCase().split(" ").join(""))<1}))).slice(0,30),S=0===w.length;return Object(x.jsxs)(k,{title:"User | Minimal-UI",children:[d&&Object(x.jsx)(X.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh"},children:Object(x.jsx)(Y.a,{size:"5rem"})}),!d&&Object(x.jsxs)(h.a,{children:[Object(x.jsxs)(j.a,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[Object(x.jsx)(u.a,{variant:"h4",gutterBottom:!0,children:"Simran Medicos"}),Object(x.jsx)(Z.a,{variant:"contained",component:i.b,to:"#",startIcon:Object(x.jsx)(z.a,{icon:V.a}),children:"New Medicine"})]}),Object(x.jsxs)(_.a,{children:[Object(x.jsx)(fe,{filterName:a,onFilterName:function(e){n(e.target.value),f(!1),""===e.target.value&&f(!0)}}),Object(x.jsx)(pe,{children:Object(x.jsx)($.a,{sx:{minWidth:500},children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(be,{headLabel:Me,rowCount:c.length}),!O&&Object(x.jsx)(ee.a,{children:w.map((function(e){var t=e._id,a=e.name,n=e.company,r=e.location;return Object(x.jsxs)(te.a,{tabIndex:-1,children:[Object(x.jsx)(ae.a,{align:"left",children:Object(x.jsx)("b",{children:a})}),Object(x.jsx)(ae.a,{align:"left",children:r}),Object(x.jsx)(ae.a,{align:"left",children:n}),Object(x.jsx)(ae.a,{align:"right",children:Object(x.jsx)(Ie,{})})]},t)}))}),S&&Object(x.jsx)(ee.a,{children:Object(x.jsx)(te.a,{children:Object(x.jsx)(ae.a,{align:"center",colSpan:6,sx:{py:3},children:Object(x.jsx)(le,{searchQuery:a})})})})]})})})]})]})]})}var Ee=a(461),Te={animate:{transition:{staggerChildren:.1}}},De={duration:.72,ease:[.43,.13,.23,.96]},He={duration:.48,ease:[.43,.13,.23,.96]},Re={animate:{scale:[.3,1.1,.9,1.03,.97,1],opacity:[0,1,1,1,1,1],transition:De},exit:{scale:[.9,1.1,.3],opacity:[1,1,0]}},Pe=(Object(g.a)({},De),Object(g.a)(Object(g.a)({},{y:[12,-24,720],scaleY:[.985,.9,3],opacity:[1,1,0]}),{},{transition:He}),Object(g.a)(Object(g.a)({},{y:[-12,24,-720],scaleY:[.985,.9,3],opacity:[1,1,0]}),{},{transition:He}),Object(g.a)(Object(g.a)({},{x:[0,24,-720],scaleX:[1,.9,2],opacity:[1,1,0]}),{},{transition:He}),Object(g.a)(Object(g.a)({},{x:[0,-24,720],scaleX:[1,.9,2],opacity:[1,1,0]}),{},{transition:He}),["open","children"]);function Ne(e){var t=e.open,a=e.children,n=Object(m.a)(e,Pe);return Object(x.jsx)(v.a,Object(g.a)(Object(g.a)({component:Ee.a.div,initial:!1,animate:t?"animate":"exit",variants:Te},n),{},{children:a}))}var Le=Object(s.a)(k)((function(e){var t=e.theme;return{display:"flex",minHeight:"100%",alignItems:"center",paddingTop:t.spacing(15),paddingBottom:t.spacing(10)}}));function Je(){return Object(x.jsx)(Le,{title:"404 Page Not Found | Minimal-UI",children:Object(x.jsx)(h.a,{children:Object(x.jsx)(Ne,{initial:"initial",open:!0,children:Object(x.jsxs)(v.a,{sx:{maxWidth:480,margin:"auto",textAlign:"center"},children:[Object(x.jsx)(Ee.a.div,{variants:Re,children:Object(x.jsx)(u.a,{variant:"h3",paragraph:!0,children:"Sorry, page not found!"})}),Object(x.jsx)(u.a,{sx:{color:"text.secondary"},children:"Sorry, we couldn\u2019t find the page you\u2019re looking for. Perhaps you\u2019ve mistyped the URL? Be sure to check your spelling."}),Object(x.jsx)(Ee.a.div,{variants:Re,children:Object(x.jsx)(v.a,{component:"img",src:"/static/illustrations/illustration_404.svg",sx:{height:260,mx:"auto",my:{xs:5,sm:10}}})}),Object(x.jsx)(Z.a,{to:"/",size:"large",variant:"contained",component:i.b,children:"Go to Home"})]})})})})}function Ue(){return Object(c.i)([{path:"/dashboard",element:Object(x.jsx)(b,{}),children:[{element:Object(x.jsx)(c.a,{to:"/dashboard/user",replace:!0})},{path:"user",element:Object(x.jsx)(We,{})}]},{path:"/",element:Object(x.jsx)(b,{}),children:[{path:"404",element:Object(x.jsx)(Je,{})},{path:"login",element:Object(x.jsx)(L,{})},{path:"/",element:Object(x.jsx)(c.a,{to:"/dashboard"})},{path:"*",element:Object(x.jsx)(c.a,{to:"/404"})}]},{path:"*",element:Object(x.jsx)(c.a,{to:"/404",replace:!0})}])}var Ge=a(460),qe=a(241),Qe=a(459),Ve=a(468),Xe={borderRadius:8,borderRadiusSm:12,borderRadiusMd:16};function Ye(e,t){return"linear-gradient(to bottom, ".concat(e,", ").concat(t,")")}var Ze={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24",5008:Object(re.a)("#919EAB",.08),50012:Object(re.a)("#919EAB",.12),50016:Object(re.a)("#919EAB",.16),50024:Object(re.a)("#919EAB",.24),50032:Object(re.a)("#919EAB",.32),50048:Object(re.a)("#919EAB",.48),50056:Object(re.a)("#919EAB",.56),50080:Object(re.a)("#919EAB",.8)},_e={lighter:"#C8FACD",light:"#5BE584",main:"#00AB55",dark:"#007B55",darker:"#005249",contrastText:"#fff"},$e={lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A",contrastText:"#fff"},Ke={lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D",contrastText:Ze[800]},et={lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01",contrastText:Ze[800]},tt={lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E",contrastText:"#fff"},at={primary:Ye(_e.light,_e.main),info:Ye($e.light,$e.main),success:Ye(Ke.light,Ke.main),warning:Ye(et.light,et.main),error:Ye(tt.light,tt.main)},nt={common:{black:"#000",white:"#fff"},primary:Object(g.a)({},_e),secondary:Object(g.a)({},{lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A",contrastText:"#fff"}),info:Object(g.a)({},$e),success:Object(g.a)({},Ke),warning:Object(g.a)({},et),error:Object(g.a)({},tt),grey:Ze,gradients:at,chart:{violet:["#826AF9","#9E86FF","#D0AEFF","#F7D2FF"],blue:["#2D99FF","#83CFFF","#A5F3FF","#CCFAFF"],green:["#2CD9C5","#60F1C8","#A4F7CC","#C0F2DC"],yellow:["#FFE700","#FFEF5A","#FFF7AE","#FFF3D6"],red:["#FF6C40","#FF8F6D","#FFBD98","#FFF2D4"]},divider:Ze[50024],text:{primary:Ze[800],secondary:Ze[600],disabled:Ze[500]},background:{paper:"#fff",default:"#fff",neutral:Ze[200]},action:{active:Ze[600],hover:Ze[5008],selected:Ze[50016],disabled:Ze[50080],disabledBackground:Ze[50024],focus:Ze[50024],hoverOpacity:.08,disabledOpacity:.48}};function rt(e){return"".concat(e/16,"rem")}function it(e){var t=e.sm,a=e.md,n=e.lg;return{"@media (min-width:600px)":{fontSize:rt(t)},"@media (min-width:900px)":{fontSize:rt(a)},"@media (min-width:1200px)":{fontSize:rt(n)}}}var ot={fontFamily:"Public Sans, sans-serif",fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700,h1:Object(g.a)({fontWeight:700,lineHeight:1.25,fontSize:rt(40)},it({sm:52,md:58,lg:64})),h2:Object(g.a)({fontWeight:700,lineHeight:64/48,fontSize:rt(32)},it({sm:40,md:44,lg:48})),h3:Object(g.a)({fontWeight:700,lineHeight:1.5,fontSize:rt(24)},it({sm:26,md:30,lg:32})),h4:Object(g.a)({fontWeight:700,lineHeight:1.5,fontSize:rt(20)},it({sm:20,md:24,lg:24})),h5:Object(g.a)({fontWeight:700,lineHeight:1.5,fontSize:rt(18)},it({sm:19,md:20,lg:20})),h6:Object(g.a)({fontWeight:700,lineHeight:28/18,fontSize:rt(17)},it({sm:18,md:18,lg:18})),subtitle1:{fontWeight:600,lineHeight:1.5,fontSize:rt(16)},subtitle2:{fontWeight:600,lineHeight:22/14,fontSize:rt(14)},body1:{lineHeight:1.5,fontSize:rt(16)},body2:{lineHeight:22/14,fontSize:rt(14)},caption:{lineHeight:1.5,fontSize:rt(12)},overline:{fontWeight:700,lineHeight:1.5,fontSize:rt(12),letterSpacing:1.1,textTransform:"uppercase"},button:{fontWeight:700,lineHeight:24/14,fontSize:rt(14),textTransform:"capitalize"}};function ct(e){return Object(q.merge)(function(e){return{MuiCard:{styleOverrides:{root:{boxShadow:e.customShadows.z16,borderRadius:e.shape.borderRadiusMd,position:"relative",zIndex:0}}},MuiCardHeader:{defaultProps:{titleTypographyProps:{variant:"h6"},subheaderTypographyProps:{variant:"body2"}},styleOverrides:{root:{padding:e.spacing(3,3,0)}}},MuiCardContent:{styleOverrides:{root:{padding:e.spacing(3)}}}}}(e),function(e){return{MuiListItemIcon:{styleOverrides:{root:{color:"inherit",minWidth:"auto",marginRight:e.spacing(2)}}},MuiListItemAvatar:{styleOverrides:{root:{minWidth:"auto",marginRight:e.spacing(2)}}},MuiListItemText:{styleOverrides:{root:{marginTop:0,marginBottom:0},multiline:{marginTop:0,marginBottom:0}}}}}(e),{MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:{backgroundImage:"none"}}}},function(e){return{MuiInputBase:{styleOverrides:{root:{"&.Mui-disabled":{"& svg":{color:e.palette.text.disabled}}},input:{"&::placeholder":{opacity:1,color:e.palette.text.disabled}}}},MuiInput:{styleOverrides:{underline:{"&:before":{borderBottomColor:e.palette.grey[50056]}}}},MuiFilledInput:{styleOverrides:{root:{backgroundColor:e.palette.grey[50012],"&:hover":{backgroundColor:e.palette.grey[50016]},"&.Mui-focused":{backgroundColor:e.palette.action.focus},"&.Mui-disabled":{backgroundColor:e.palette.action.disabledBackground}},underline:{"&:before":{borderBottomColor:e.palette.grey[50056]}}}},MuiOutlinedInput:{styleOverrides:{root:{"& .MuiOutlinedInput-notchedOutline":{borderColor:e.palette.grey[50032]},"&.Mui-disabled":{"& .MuiOutlinedInput-notchedOutline":{borderColor:e.palette.action.disabledBackground}}}}}}}(e),function(e){return{MuiButton:{styleOverrides:{root:{"&:hover":{boxShadow:"none"}},sizeLarge:{height:48},containedInherit:{color:e.palette.grey[800],boxShadow:e.customShadows.z8,"&:hover":{backgroundColor:e.palette.grey[400]}},containedPrimary:{boxShadow:e.customShadows.primary},containedSecondary:{boxShadow:e.customShadows.secondary},outlinedInherit:{border:"1px solid ".concat(e.palette.grey[50032]),"&:hover":{backgroundColor:e.palette.action.hover}},textInherit:{"&:hover":{backgroundColor:e.palette.action.hover}}}}}}(e),function(e){return{MuiTooltip:{styleOverrides:{tooltip:{backgroundColor:e.palette.grey[800]},arrow:{color:e.palette.grey[800]}}}}}(e),function(e){var t=Object(re.a)(e.palette.grey[900],.48),a=Object(re.a)(e.palette.grey[900],1);return{MuiBackdrop:{styleOverrides:{root:{background:["rgb(22,28,36)","-moz-linear-gradient(75deg, ".concat(t," 0%, ").concat(a," 100%)"),"-webkit-linear-gradient(75deg, ".concat(t," 0%, ").concat(a," 100%)"),"linear-gradient(75deg, ".concat(t," 0%, ").concat(a," 100%)")],"&.MuiBackdrop-invisible":{background:"transparent"}}}}}}(e),function(e){return{MuiTypography:{styleOverrides:{paragraph:{marginBottom:e.spacing(2)},gutterBottom:{marginBottom:e.spacing(1)}}}}}(e),function(e){return{MuiIconButton:{variants:[{props:{color:"default"},style:{"&:hover":{backgroundColor:e.palette.action.hover}}},{props:{color:"inherit"},style:{"&:hover":{backgroundColor:e.palette.action.hover}}}],styleOverrides:{root:{}}}}}(e),function(e){return{MuiAutocomplete:{styleOverrides:{paper:{boxShadow:e.customShadows.z20}}}}}(e))}var pt=nt.grey[500],st=function(e){var t=Object(re.a)(e,.24);return{z1:"0 1px 2px 0 ".concat(t),z8:"0 8px 16px 0 ".concat(t),z12:"0 0 2px 0 ".concat(t,", 0 12px 24px 0 ").concat(t),z16:"0 0 2px 0 ".concat(t,", 0 16px 32px -4px ").concat(t),z20:"0 0 2px 0 ".concat(t,", 0 20px 40px -4px ").concat(t),z24:"0 0 4px 0 ".concat(t,", 0 24px 48px 0 ").concat(t),primary:"0 8px 16px 0 ".concat(Object(re.a)(nt.primary.main,.24)),secondary:"0 8px 16px 0 ".concat(Object(re.a)(nt.secondary.main,.24)),info:"0 8px 16px 0 ".concat(Object(re.a)(nt.info.main,.24)),success:"0 8px 16px 0 ".concat(Object(re.a)(nt.success.main,.24)),warning:"0 8px 16px 0 ".concat(Object(re.a)(nt.warning.main,.24)),error:"0 8px 16px 0 ".concat(Object(re.a)(nt.error.main,.24))}}(pt),xt=function(e){var t=Object(re.a)(e,.2),a=Object(re.a)(e,.14),n=Object(re.a)(e,.12);return["none","0px 2px 1px -1px ".concat(t,",0px 1px 1px 0px ").concat(a,",0px 1px 3px 0px ").concat(n),"0px 3px 1px -2px ".concat(t,",0px 2px 2px 0px ").concat(a,",0px 1px 5px 0px ").concat(n),"0px 3px 3px -2px ".concat(t,",0px 3px 4px 0px ").concat(a,",0px 1px 8px 0px ").concat(n),"0px 2px 4px -1px ".concat(t,",0px 4px 5px 0px ").concat(a,",0px 1px 10px 0px ").concat(n),"0px 3px 5px -1px ".concat(t,",0px 5px 8px 0px ").concat(a,",0px 1px 14px 0px ").concat(n),"0px 3px 5px -1px ".concat(t,",0px 6px 10px 0px ").concat(a,",0px 1px 18px 0px ").concat(n),"0px 4px 5px -2px ".concat(t,",0px 7px 10px 1px ").concat(a,",0px 2px 16px 1px ").concat(n),"0px 5px 5px -3px ".concat(t,",0px 8px 10px 1px ").concat(a,",0px 3px 14px 2px ").concat(n),"0px 5px 6px -3px ".concat(t,",0px 9px 12px 1px ").concat(a,",0px 3px 16px 2px ").concat(n),"0px 6px 6px -3px ".concat(t,",0px 10px 14px 1px ").concat(a,",0px 4px 18px 3px ").concat(n),"0px 6px 7px -4px ".concat(t,",0px 11px 15px 1px ").concat(a,",0px 4px 20px 3px ").concat(n),"0px 7px 8px -4px ".concat(t,",0px 12px 17px 2px ").concat(a,",0px 5px 22px 4px ").concat(n),"0px 7px 8px -4px ".concat(t,",0px 13px 19px 2px ").concat(a,",0px 5px 24px 4px ").concat(n),"0px 7px 9px -4px ".concat(t,",0px 14px 21px 2px ").concat(a,",0px 5px 26px 4px ").concat(n),"0px 8px 9px -5px ".concat(t,",0px 15px 22px 2px ").concat(a,",0px 6px 28px 5px ").concat(n),"0px 8px 10px -5px ".concat(t,",0px 16px 24px 2px ").concat(a,",0px 6px 30px 5px ").concat(n),"0px 8px 11px -5px ".concat(t,",0px 17px 26px 2px ").concat(a,",0px 6px 32px 5px ").concat(n),"0px 9px 11px -5px ".concat(t,",0px 18px 28px 2px ").concat(a,",0px 7px 34px 6px ").concat(n),"0px 9px 12px -6px ".concat(t,",0px 19px 29px 2px ").concat(a,",0px 7px 36px 6px ").concat(n),"0px 10px 13px -6px ".concat(t,",0px 20px 31px 3px ").concat(a,",0px 8px 38px 7px ").concat(n),"0px 10px 13px -6px ".concat(t,",0px 21px 33px 3px ").concat(a,",0px 8px 40px 7px ").concat(n),"0px 10px 14px -6px ".concat(t,",0px 22px 35px 3px ").concat(a,",0px 8px 42px 7px ").concat(n),"0px 11px 14px -7px ".concat(t,",0px 23px 36px 3px ").concat(a,",0px 9px 44px 8px ").concat(n),"0px 11px 15px -7px ".concat(t,",0px 24px 38px 3px ").concat(a,",0px 9px 46px 8px ").concat(n)]}(pt);function lt(e){var t=e.children,a=Object(y.useMemo)((function(){return{palette:nt,shape:Xe,typography:ot,shadows:xt,customShadows:st}}),[]),n=Object(qe.a)(a);return n.components=ct(n),Object(x.jsx)(Qe.a,{injectFirst:!0,children:Object(x.jsxs)(Ve.a,{theme:n,children:[Object(x.jsx)(Ge.a,{}),t]})})}var dt=a(48),bt=a(418);function ht(){var e=Object(dt.a)();return Object(x.jsx)(bt.a,{styles:{"*":{margin:0,padding:0,boxSizing:"border-box"},html:{width:"100%",height:"100%",WebkitOverflowScrolling:"touch"},body:{width:"100%",height:"100%"},"#root":{width:"100%",height:"100%"},input:{"&[type=number]":{MozAppearance:"textfield","&::-webkit-outer-spin-button":{margin:0,WebkitAppearance:"none"},"&::-webkit-inner-spin-button":{margin:0,WebkitAppearance:"none"}}},textarea:{"&::-webkit-input-placeholder":{color:e.palette.text.disabled},"&::-moz-placeholder":{opacity:1,color:e.palette.text.disabled},"&:-ms-input-placeholder":{color:e.palette.text.disabled},"&::placeholder":{color:e.palette.text.disabled}},img:{display:"block",maxWidth:"100%"},".blur-up":{WebkitFilter:"blur(5px)",filter:"blur(5px)",transition:"filter 400ms, -webkit-filter 400ms"},".blur-up.lazyloaded ":{WebkitFilter:"blur(0)",filter:"blur(0)"}}})}function jt(){var e=Object(c.f)().pathname;return Object(y.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}function ut(){var e=Object(dt.a)(),t={backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",backgroundColor:Object(re.a)(e.palette.background.default,.72)};return Object(x.jsx)(bt.a,{styles:{"&.apexcharts-canvas":{".apexcharts-xaxistooltip":Object(g.a)(Object(g.a)({},t),{},{border:0,boxShadow:e.customShadows.z24,color:e.palette.text.primary,borderRadius:e.shape.borderRadiusSm,"&:before":{borderBottomColor:"transparent"},"&:after":{borderBottomColor:Object(re.a)(e.palette.background.default,.72)}}),".apexcharts-tooltip.apexcharts-theme-light":Object(g.a)(Object(g.a)({},t),{},{border:0,boxShadow:e.customShadows.z24,borderRadius:e.shape.borderRadiusSm,"& .apexcharts-tooltip-title":{border:0,textAlign:"center",fontWeight:e.typography.fontWeightBold,backgroundColor:e.palette.grey[50016],color:e.palette.text["light"===e.palette.mode?"secondary":"primary"]}}),".apexcharts-legend":{padding:0},".apexcharts-legend-series":{display:"flex !important",alignItems:"center"},".apexcharts-legend-marker":{marginRight:8},".apexcharts-legend-text":{lineHeight:"18px",textTransform:"capitalize"}}}})}function gt(){return Object(x.jsxs)(lt,{children:[Object(x.jsx)(jt,{}),Object(x.jsx)(ht,{}),Object(x.jsx)(ut,{}),Object(x.jsx)(Ue,{})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var mt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,485)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)}))};r.a.render(Object(x.jsx)(o.b,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(gt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),mt()}},[[415,1,2]]]);
//# sourceMappingURL=main.8a54179f.chunk.js.map