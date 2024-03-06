import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* Google Font */

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');
  
/* CSS Variables */


:root {

  /* Colors */

   --soft-blue:     #8BACDA;
   --cyan:          #00FFF7;
   --cyan-hover:  #00FFF780;
   --bg-color:      #0D192B;
   --card-bg-color:	#14253d;
   --line-color: 	  #2F415B;
   --white:         #FFFFFF;

  /* Typography */
   
   /* font family */
   --ff-outfit: 'Outfit', sans-serif;

   /* font weight */
   --fw-300: 300;
   --fw-400: 400;
   --fw-500: 500;
   --fw-600: 600;

 
/* CSS Reset */

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-family: var(--ff-outfit);
      scroll-behavior: smooth;
    }

    a { text-decoration: none; }

    body {
      background: var(--bg-color);
      min-height: 100vh;
      padding: 30px;
      display: flex;
      justify-content: center;
      align-items:     center;
    }

}

`