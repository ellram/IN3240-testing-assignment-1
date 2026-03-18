-----------------------------------------------
Test Case ID: 01
Test Case Name: User fills out "customer care" form with name, email, phone and message. 
Test Description: Will test if the customer care form will be filled out, and recives a confirmation message
-----------------------------------------------
Preconditions:
- User needs a valid internett connection
- All fields must be filled out

-----------------------------------------------
Test Data:
    - Name: Quorra T. Flynn
    - Email quorra@example.com
    - Phone: 12345678
    - Message: "This is a test message"

-----------------------------------------------
Test Steps:
    Step 1: Navigate to application URL (https://parabank.parasoft.com/parabank/index.htm)
    Expected Result: Application homepage loads with general information on front page with login action on sidebar

    Step 2: Click "Email-icon" button
    Expected Result: Site redirects to page for "customer-care" form. 

    Step 3: Fill out name field
    Expected Result: Accepts entered name

    Step 4: Fill out email field
    Expected Result: Accepts entered email

    Step 5: Fill out phone field
    Expected Result: Accepts entered phone number

    Step 4: Fill out message field with the message to customer service
    Expected Result: Accepts entered message

    Step 5: Click "Send to customer care" button
    Expected Result: 
    - Confirmation message displays: "Thank you "yourname" A Customer Care Representative will be contacting you."

-----------------------------------------------
Status: [Pass]

Executed By: Elle
Date: 18.03.2026
Notes: Test passes, when all fields are filled out.  