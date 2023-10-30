## E-commerce

Challege code e-commerce project

- [Home]
  - [PLP (Product List Page)]
  - [PDP (Product Detail Page)]
  - [Cart]
    - [Resume]
    - [Checkout]
    - [Confirmation]
- [My Account]
- [Admin (CMS) (optional)]
  - [Product Registration]
  - [Customer List]
- [Login]
- [Registration]

## Acceptance Criteria

### [ x ] User Registration

The screen can be accessed from the home screen, either through two links for each page or simply by starting with the login screen, with the message below: "If you are not registered yet, click here," and the link directs to the registration page. On the registration screen, below it, there should be a message: "If you already have an account, log in," and the link will be directed to the login screen.

The fields in the registration form should be:

- Full Name
- Email
- Phone Number
- Address:
  - ZIP Code (In the future, we may have an API lookup of the customer's address data based on the entered ZIP code)
  - Street, Avenue, Alley, etc. (Street Address)
  - Number (Needs to have some indication of what to enter when there is no number)
  - Complement
  - Neighborhood
  - City
  - State
- Password Field
- Field to repeat and confirm the password
- Checkbox accepting the privacy policies. There doesn't need to be a privacy policy page, but it can be presented as a link.
- Save Registration Button: This button should trigger a console.log displaying all the validated data.

### Note:

The action to send the data will be covered in future content.
If you want to add a page for product registration, you can do so as extra points, and you can design it in your own way, as long as it makes sense with the future products of the store you have chosen.

### [ x ] Login Screen

The fields on the Login Screen should be:

- Email
- Password (Please remember that password inputs should have type="password").
- Login Button: It doesn't need to perform any action other than triggering a console.log displaying that the email and password fields are valid.

Therefore, there should be the same validations for email and password as on the registration screen.

## Part 2

## Acceptance Criteria

### [x]Home Page

- Must have a main banner, which can be a single image or an image carousel. [ x ]
- Should display a list of at least 8 products. They can be presented in a list format or in a product carousel.
- If choosing a product carousel, the choice of the library to implement this feature is at your discretion and will count as an extra credit towards your grade.
- Each product will be represented as a card with the following:
  - Product image
  - Name
  - Price
  - "Add to Cart" button
- It should be possible to change the quantity of products in the cart through the card, but it is not mandatory.
- Feel free to tailor the website to be more aligned with the chosen segment and present more than one list of products (e.g., new arrivals, best sellers, etc.). Be flexible with a minimum of 4 products per section.

### [ ]PDP (Product Details Page)

- Should open the product with an enlarged image.
- Display the product name.
- Show the price.
- Allow users to choose the quantity to add to the cart.
- Include a button to add the product to the cart.

### [x] Header/Footer

- For all navigation, you may include a header and/or a footer, and they should be consistent with the chosen segment for your website.

#### [x]Header

- Logo
- Site category menu (minimum of 3 sections)
- User account icon. If the user is not logged in, display a "Login" button. If the user is logged in, show the user's name next to the icon. You can use Context (useContext) to store user data.
- Icon to navigate to the cart.

#### [x]Footer

- Should be divided into 3 columns.
- Include the store's logo, a slogan, and information about the store, including the address.
- Links to different parts of the site and/or external links.
- Contact information, which may include social media icons.

### [ ]Responsiveness

- Given that we are now working on a more E-Commerce-like website, responsiveness will be a factor that contributes to a higher grade.
