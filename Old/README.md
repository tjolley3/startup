startup
I have learned about pulling and pushing, there are a lot more levels to this that I will discover on the way
Another test
**# Testing Bold**

# Inventory System

## Description of Deliverable

### Elevator Pitch

So you can't find a device that you need for software testing? You don't know who has the device? Want to let others know when you have checked it out and when it's due back? I want to create an app that allows all company users to check out an item and then have a pre-conditioned return date of two weeks after check-out date. User's **MUST** check it out again if they will need it longer than two weeks. Any device that has been checked out, will be marked as needing to be returned. If User 1 needs device A and User 2 has it, they can contact or reach out to that person. If a device goes missing, it is the responsbility of the last person who checked it out.

### Design and Look

Note: Not written up yet, still need to design what it looks like by hand
![MicrosoftTeams-image (4)](https://github.com/tjolley3/startup/assets/144293311/f8e962fa-b846-46ea-975e-6098b70080b7)
![MicrosoftTeams-image (5)](https://github.com/tjolley3/startup/assets/144293311/208e58e3-0dc6-4f51-8594-50040bedd52c)
![MicrosoftTeams-image (3)](https://github.com/tjolley3/startup/assets/144293311/6460887c-e9a9-41d9-8f1a-c69690d3056f)

## Features and Intuitive Use System

- Secure login over HTTPS
- Ability to view all devices available
- Current location or status of device
- User who currently has it
- When device is due back into inventory closet
- Any accessories that might come with the device
- Bin number of device
- Ability for admin or automatic system to ping or email users or employees

### Technology That Will Be Used

- **HTML** - Uses HTML structure for the inventory system. Multiple pages with integers or codes where Device Name, Make, Model, and any other identifiable info will be included
- **CSS** - The styling won't be over the top, but will be good looking enough to be able to visibly see and properly navigate. I don't want to over complicate the UI, just make it easy on the eyes to work with proper design and spacing
- **JavaScript** - This will provide information on logins for all users, and processing the data given by users and input moving around devices
- **Service** - Backend service for:
    -login
    -retrieving user input of devices and details
    -checking in and out devices
    -retrieving and pulling data stored in that service
- **DB** - Store device info, user login info, and potentially grant the ability for data to be exported into Excel and other spreadsheet information for company inventory and cost meetings
- **Login** - Register and login user for access and secure this in teh database level. You will not have access to inventory system unless you are authenticated and are allowed access with your login.
  - _You can also have a way between the DB and the Login of who has access and who is allowed access on a physical level_
-**Web Socket** - As someone uses the inventory system, it won't be broadcasted per se, but it will show the status to all users and people with login access.
-**React** - Application is planned to use the React web framework


_NOTE!!!_ Below is mostly a mock up of what ideally the end result once it's completed, this will be adjusted as the term moves forward, this COMPLETION is just an example, these will be changed at some point and updated in time during the semester
## HTML deliverable

- **HTML pages** - At this time, I am going to create a list of sample devices and information on this page, Login page/homepage, and potentially an admin page
- **Login** - Input and submit box
- **Text** - Login, errors for login, text of all device info, location, login info on top left or top right of page
- **Database** - The inventory system reflects info of the users and the given device

## CSS deliverable

I want to make it usable, not over the top, and also potentially include pictures of what each device looks like for the users

-**Header, footer, and main content of this system**
-**Navigation** - Making sure it is easy to navigate for the user
-**Accessibility** - Users should be able to login from a workstation or cell phone
-**Elements** - Colors will be more muted and minimalist so with buttons and overall look to keep it professional and internal use only
-**Images** - Mostly for what the device looks like, maybe icons for X not available or check mark for available

## JavaScript 

Make it accessible to any user that is required and needs to use it

## Service

Added Service part and commmitting changes
Added and fixed my code
Added JS files
Added Footer on each HTML page

