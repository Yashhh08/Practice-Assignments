import { SidebarLink } from "@/types";

export const sidebarLinks: SidebarLink[] = [
    {
        imgURL: "/assets/icons/home.svg",
        route: "/",
        label: "Home",
    },
    {
        imgURL: "/assets/icons/users.svg",
        route: "/community",
        label: "Community",
    },
    {
        imgURL: "/assets/icons/star.svg",
        route: "/collection",
        label: "Collections",
    },
    // {
    //     imgURL: "/assets/icons/suitcase.svg",
    //     route: "/jobs",
    //     label: "Find Jobs",
    // },
    {
        imgURL: "/assets/icons/tag.svg",
        route: "/tags",
        label: "Tags",
    },
    {
        imgURL: "/assets/icons/user.svg",
        route: "/profile",
        label: "Profile",
    },
    {
        imgURL: "/assets/icons/question.svg",
        route: "/ask-question",
        label: "Ask a question",
    },
];

export const BADGE_CRITERIA = {
    QUESTION_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    QUESTION_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    TOTAL_VIEWS: {
        BRONZE: 1000,
        SILVER: 10000,
        GOLD: 100000,
    },
};

export const topQuestions = ["Would it be appropriate to point out an error in another paper during a referee report?", "How can an airconditioning machine exist?", "Interrogated every time crossing UK Border as citizen", "Low digit addition generator", "What is an example of 3 numbers that do not make up a vector?"]

export const popularTags = [{ tag: "JAVASCRIPT", number: 20152 }, { tag: "REACT", number: 20152 }, { tag: "NODE.JS", number: 20152 }, { tag: "EXPRESS", number: 20152 }, { tag: "MONGODB", number: 20152 }, { tag: "ANGULAR", number: 20152 }, { tag: "JAVA", number: 20152 }, { tag: "DEVOPS", number: 20152 }]