import useMediaQuery from "@mui/material/useMediaQuery";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const CV = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        p: 3,
        minWidth: isMobile ? "100%" : "400px",
        color: "#abd699",
        backgroundColor: "#75c9b7",
        paddingBottom: 12,
      }}
    >
      <Typography
        component="h3"
        variant="h3"
        align="center"
        sx={{ marginTop: 10, marginBottom: 3 }}
        color="#c7ddcc"
        fontWeight={600}
      >
        {" "}
        Skills
      </Typography>
      <Typography
        component="h5"
        variant="h5"
        align="left"
        sx={{ marginTop: 3, marginBottom: 1 }}
        color="#c7ddcc"
        fontWeight={200}
      >
        {" "}
        Frontend
      </Typography>
      <ImageList direction="row" cols={12} component={Stack}>
        {frontEndBadges.map((item) => (
          <ImageListItem
            key={item.imgUrl}
            sx={{
              m: 4,
              width: "4rem",
            }}
          >
            <img
              src={item.imgUrl}
              srcSet={item.imgUrl}
              href={item.href}
              alt={item.name}
              key={item.name}
              target="_blank"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography
        position="below"
        sx={{
          textAlign: "center",
          color: "#16123f",
          fontSize: "1rem",
          paddingTop: "7px",
        }}
      ></Typography>
      <Typography
        component="h5"
        variant="h5"
        align="left"
        sx={{ marginTop: 3, marginBottom: 1 }}
        color="#c7ddcc"
        fontWeight={200}
      >
        {" "}
        Backend
      </Typography>
      <ImageList
        sx={{ width: "100%" }}
        direction="row"
        cols={12}
        component={Stack}
      >
        {backendEndBadges.map((item) => (
          <ImageListItem
            key={item.imgUrl}
            sx={{
              m: 3,
              width: "4rem",
            }}
          >
            <img
              src={item.imgUrl}
              srcSet={item.imgUrl}
              href={item.href}
              alt={item.name}
              key={item.name}
              target="_blank"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography
        component="h5"
        variant="h5"
        align="left"
        sx={{ marginTop: 3, marginBottom: 1 }}
        color="#c7ddcc"
        fontWeight={200}
      >
        {" "}
        CV/Resume
      </Typography>
      <Typography sx={{ color: "#16123f" }}>
        If you would like to view my full set of skills, projects and work
        history, you can download the CV from{" "}
        <a
          sx={{
            color: "#16123f",
            textDecoration: "none",
            "& :hover": { color: "#ffe26a" },
          }}
          href="https://drive.google.com/file/d/1dGqdtZhukJVO3K5juzl4JdFqD_DmriWW/view?usp=sharing"
        >
          here
        </a>
      </Typography>
    </Box>
  );
};

//Following lists courtesy of Amelie Pira AM003@github.com
const frontEndBadges = [
  {
    name: "HTML5",
    imgUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    href: "https://www.w3.org/html/",
  },
  {
    name: "CSS3",
    imgUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    href: "https://www.w3schools.com/css/",
  },

  {
    name: "Javascript",
    imgUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

  {
    name: "jQuery",
    imgUrl: "https://www.vectorlogo.zone/logos/jquery/jquery-vertical.svg",
    href: "https://jquery.com",
  },
  {
    name: "React",
    imgUrl: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    href: "https://reactjs.org/",
  },
  {
    name: "Handlebars",
    imgUrl:
      "https://www.vectorlogo.zone/logos/handlebarsjs/handlebarsjs-icon.svg",
    href: "https://handlebarsjs.com",
  },
  {
    name: "MaterialUI",
    imgUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    href: "https://mui.com/",
  },
  {
    name: "Bootstrap",
    imgUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    href: "https://getbootstrap.com",
  },
  {
    name: "Bulma",
    imgUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/bulma/bulma-plain.svg",
    href: "https://bulma.io/",
  },
];

const backendEndBadges = [
  {
    name: "Express",
    imgUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    href: "https://expressjs.com",
  },
  {
    name: "Node",
    imgUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    href: "https://nodejs.org",
  },
  {
    name: "Inquirer",
    imgUrl:
      "https://raw.githubusercontent.com/SBoudrias/Inquirer.js/master/assets/inquirer_readme.svg?sanitize=true",
    href: "https://www.npmjs.com/package/inquirer",
  },
  {
    name: "REST APIs",
    imgUrl:
      "https://gitlab.com/uploads/-/system/project/avatar/9910889/875327.png?w=248&fit=crop&auto=format",
    href: "https://www.codecademy.com/article/what-is-rest",
  },
  {
    name: "mysql",
    imgUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    href: "https://www.mysql.com/",
  },
  {
    name: "Sequelize",
    imgUrl:
      "https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg",
    href: "https://sequelize.org",
  },
  {
    name: "MongoDB",
    imgUrl: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    href: "https://www.mongodb.com",
  },
  {
    name: "Graphql",
    imgUrl: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    href: "https://graphql.org",
  },
  {
    name: "OOP",
    imgUrl:
      "https://miro.medium.com/max/300/0*goJuBKoyL-zZX4RB.png?w=248&fit=crop&auto=format",
    href: "https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP#:~:text=Object%2Doriented%20programming%20(OOP)%20is%20a%20computer%20programming%20model,has%20unique%20attributes%20and%20behavior.",
  },
];
