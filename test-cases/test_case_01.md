-----------------------------------------------
Test Case ID: 01
Test Case Name: User fills out "customer care" form with name, email, phone and message. 
Test Description: 
-----------------------------------------------
Preconditions:
- User needs a valid internett connection
- All fields must be filled out

-----------------------------------------------
Test Data:
- Name: Anna Elle
- Email: AEtest@example.com
- Phone: 44433888
- Message: "This is a test"

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
Actual Results: [To be filled during execution]

Status: [Pass/Fail/Blocked]

Executed By: _____________
Date: _____________
Notes: _____________