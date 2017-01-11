// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#021C1E"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress={"none"} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
							LOI CARREZ
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
             	French law which obliges the vendor of a property lot to mention the surface area.
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
							real estate ad
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              35 m2, 50m2, 100m2...
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
							Price... Good deal?
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              meilleursagents.com
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Estimatation of square meter by town
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              leboncoin.fr
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Leader of classified ad
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              1 sentence
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
							Determine if the price of a real estate on leboncoin.fr classified ad is a good deal.
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
							How to do that?
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
							By creating a link between leboncoin.fr, meilleursagents.com and the end-user.
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Stack
            </Heading>
            <CodePane
              textSize="18"
              textAlign="center"
              lang="html"
              source={`node.js + NPM + Material Design (mdl, bootstrap...) + Javascript`}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Just tell me what to do
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
							Step 1
            </Heading>
            <Heading size={1} lineHeight={1} textColor="white">
							Classified ad real estate definition
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
							Define the JSON schema for a real estate leboncoin.fr classified ad.
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
							Step 2
            </Heading>
            <Heading size={1} lineHeight={1} textColor="white">
							Estimation from Meilleurs agents
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
							Define the JSON schema to compute the square meter estimation for a real estate ad.
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
							Step 3
            </Heading>
            <Heading size={1} lineHeight={1} textColor="white">
							Connexion?
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
							Write a User Flow
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
							Step 4
            </Heading>
						<CodePane
              textSize="18"
              textAlign="center"
              lang="html"
              source={`require('leboncoin')`}
              margin="20px auto"
            />
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
							From the ad url, scrap the webpage and return the real estate properties in JSON format.
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
							Step 5
            </Heading>
						<CodePane
              textSize="18"
              textAlign="center"
              lang="html"
              source={`require('meilleursagents')`}
              margin="20px auto"
            />
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
							From a real estate ad JSON object, determine:
            </Heading>
						<List textColor="white" align="center">
                <ListItem>price for the square meter</ListItem>
                <ListItem>Is it a good deal?</ListItem>
            </List>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
							Step 6
            </Heading>
						<CodePane
              textSize="18"
              textAlign="center"
              lang="html"
              source={`node app.js`}
              margin="20px auto"
            />
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
							Build the Node server with Express.
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
							Step 7
            </Heading>
            <Heading size={1} lineHeight={1} textColor="white">
							UX/UI
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
							From a leboncoin real estate ad url, compute the price by square meter and give a feedback to the user about the deal (good or not).
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              2 sessions
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Production ready?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
