import Head from "next/head";

const Header = (props) => (
  <div>
    <Head>
      <title>Cards Party</title>
      <meta charset="UTF-8" />
      <link href="global.css" rel="stylesheet" type="text/css" />
      <link href="bootstrap.min.css" rel="stylesheet" type="text/css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Open+Sans:wght@300;400;700;800&display=swap"
        rel="stylesheet"
      ></link>

      <script src="bootstrap.min.js" type="text/javascript"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    {props.children}
  </div>
);

export default Header;
