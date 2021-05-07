export * from "./Connections";
export * from "./ConnectionsItem";












// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// // import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';

// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { orange } from '@material-ui/core/colors';

// import SimplePaper from '../SimplePaper'



// const useStyles = makeStyles((theme) => ({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: orange[800],
//   },
// }));

// export default function ConnectionsCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
            
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             {/* <MoreVertIcon /> */}
//           </IconButton>
//         }
//         title="Connections"
//         subheader="Mentor List"
//       />
//       {/* <CardMedia
//         className={classes.media}
//         image=""
//         title="contact"
       
//       /> */}
//       <SimplePaper />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           send a message, request a meeting, or video chat with your connections here
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
 

//       </CardActions>
      
//     </Card>
//   );
// };

