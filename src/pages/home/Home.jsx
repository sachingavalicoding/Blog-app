import TopHeading from "../../components/navbar/TopHeading"
import TopNav from "../../components/navbar/TopNav"
import HeroPage from "./Hero/HeroPage"
import Popular from "./popular/Popular"
import Recent from "./recent/Recent"
import "../../components/navbar/navbar.css"
const Home = () => {
    return (
        <>

            <TopNav />
            <TopHeading />
            <HeroPage />
            <Recent />
            <Popular
                image={"./assets/coding/slide4.jpg"}
                heading={"Supercharging Web Apps: The Magic of JavaScript Modules"}
                subheading={"Coding ERA "}
                content={"Explore the game-changing impact of JavaScript modules in our latest blog. Discover how modular programming enhances code maintainability, fosters collaboration, and boosts overall application performance. Uncover the simplicity and efficiency of structuring your JavaScript projects using modules, revolutionizing the way you develop web applications."} />
            <Popular
                image={"./assets/coding/slide5.jpg"}
                heading={"The Art of Clean Code: JavaScript Best Practices Unveiled"}
                subheading={"Coding ERA "}
                content={"Dive into the realm of clean coding with our insightful blog. Learn essential JavaScript best practices that streamline your development process, making your code more readable, maintainable, and bug-resistant. Elevate your coding standards, reduce technical debt, and embark on a journey towards crafting elegant and efficient JavaScript code."}
            />
        </>
    )
}

export default Home