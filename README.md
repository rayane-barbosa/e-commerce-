# e-commerce-
Challege code e-commerce project 


|-- home
    |-- PLP (Product List Page)
    |-- PDP (Product Detail Page)
    |-- Cart
        |-- resume
        |-- checkout
        |-- confirmation
|-- My Account
|-- Admin (CMS)
    |-- Product Registration
    |-- Customer Listing
|-- *Login*
|-- *Registration*


Acceptance Criteria
User Registration
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

Note:
The action to send the data will be covered in future content.
If you want to add a page for product registration, you can do so as extra points, and you can design it in your own way, as long as it makes sense with the future products of the store you have chosen.

Login Screen
The fields on the Login Screen should be:
- Email
- Password (Please remember that password inputs should have type="password").
- Login Button: It doesn't need to perform any action other than triggering a console.log displaying that the email and password fields are valid.

Therefore, there should be the same validations for email and password as on the registration screen.