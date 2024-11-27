# Daily Briefs [🔗](https://dailybriefs.netlify.app/)

This React application is a news aggregator that fetches and displays the latest news articles based on user-selected categories such as Technology, Business, Health, Sports, Entertainment, and Science. The app consists of three main components: NewsBoard, NewsItem, and Navbar.

## NewsBoard Component:
Fetches news data from an API based on the selected category.
Displays a loading spinner while data is being fetched using the Rings component from react-loader-spinner.
Once data is fetched, it displays news items using the NewsItem component. If there's an error in fetching data, it shows an error message.

## NewsItem Component:
Represents individual news articles. It shows a thumbnail image, title, brief description, and a "Read More" link to the full article.
Includes error handling for missing images, defaulting to a placeholder image if the article image fails to load or is unavailable.

## Navbar Component:
Allows users to select different news categories. Clicking on a category triggers the setCategory function, which updates the news category displayed on the NewsBoard.

## Core Functionality:
### Real-Time News Fetching:
 The app retrieves the latest news articles from a third-party API based on the user-selected category, ensuring up-to-date content.

### Category-Based News Display: 
Users can browse news by choosing from categories like Technology, Business, Health, Sports, Entertainment, and Science.

### Responsive and Interactive Experience: 
The app is optimized for various devices, offering a smooth and adaptable user interface with easy navigation between categories.

### Visual Feedback and Error Handling: 
A loading spinner is displayed during data fetching, and errors are handled gracefully with user-friendly messages to maintain a positive experience.

### Engaging Content Presentation: 
Articles are displayed with titles, brief descriptions, and images, with links to the full stories. Default placeholders ensure a consistent look if any data is missing.
