# Dog Pound

This was a really fun project! Using the Punk API which provides data on the Brew Dog products to display the brand back catalogue, adding a search functionality and the ability to filter on key attributes.

The app is built in React and the primary functionality is driven by a fetch request to the Punk API which is wrapped in a useEffect hook. This enables me to store the web-address of the API in state and the re-render when the web-address updated. For example when a search term was typed in.

The filter functionality works on a similar basis by taking advantage of the range of different APIs to call up a pre-filtered list of data to display. I learned a lot about working with APIs and using some of the key hooks in React like useEffect and useState.

To take the project further I am working on adding an authentication loop to allow users to create an account. I would do this with useContext hook and React Router to create a pathway to the sign-up pages.

The live site is hosted on firebase here: https://dog-pound.web.app/.  You can view a stripped back version of the code on this repo, without the node modules and firebase config. Maybe crack open a beer while you do 🍺
