ToolsPros

### Description ###
I have started this website in order to learn React.js and testing, this is the reason you might notice different styles of coding in some portions of the application.
This website is work in progress, and will stay this way for years to come, while I learn new technologies, and improve my coding skills.
I hope one day to turn this tiny website into a colossus web application, which will be able to compete in features and security with giants like Amazon, only then I might feel like this application is finished.

### Features ###
**Simple shop application, with ability to..**
Navigate to.. --> 
	Home, 
	Shop, 
	About, 
	Contact, 
	Cart, 
	Admin, 
	Checkout, 
	Sign in/up

**Current Features -->**
	Regular User
	Ability to sign in/up with FireBase
	
	Add / Remove items to/from cart

	Proceed to checkout with items in the cart

	Place order using PayPal ( Fake account is provided in checkout section )

	Send message via "Contact Us" in Contact page 

	Leave review for the item in the "Shop" section --> Only signed in user, which did not leave review for this item yet ( This is checked on both, client and server side )

	Use "Search" in "Shop" section to filter out needed product

	Use Featured Items carousel in "Shop" section, carousel list depends on if item has "isFeatured" selected during item creation

	Shipping for items are calculated as 1 shipping price for unlimited amount of similar items

**Admin User ( Need to sign in using admin credentials, which are provided in sign in section, admin credentials are checked on server (Server has list of FireBase account IDs which are allowed to request / add certain data ), and do not depend on "isAdmin" etc in user object )**

	For now even not signed in user can see most of this information, as I did not prioritize it, since admin account is given away to anyone :)
	Add Product : Anyone can see, admin can add
	Product List: Anyone can see, admin can remove
	User Messages: Admin can see, and remove
	Reviews: Anyone can see, admin can remove

	Admin page >
		Add Product > Ability to add product to database

		Product List > Ability to see and remove items from database, not counting default items. Default items are checked on both server and client side, and cannot be removed by anyone

		User Messages > Ability to read and remove messages, which were sent from "Contact" page

		Reviews > Ability to read and remove user reviews for products
	


>>>
Thank you for visiting! :)
>>>