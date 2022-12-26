import aboutCompany from "./about/aboutCompany.json";
import areasList from "./about/areasList.json";
import persona from "./about/persona.json";

import constructionCategories from "./construction/constructionCategories.json"
import constructionHeaderContent from "./construction/constructionHeaderContent.json";

import consumerCategories from "./consumer/consumerCategories.json";
import consumerHeaderContent from "./consumer/consumerHeaderContent.json";

import energyCategories from "./energy/energyCategorises.json"
import energyHeaderContent from "./energy/energyHeaderContent.json";

import itHeaderContent from "./it/itHeaderContent.json";
import itCategories from "./it/itCategories.json";

import vacancy from "./vacancy/vacancy.json";

import directions from "./home/directions.json"
import homeHeader from "./home/homeHeader.json";
import navigation from "./home/navigation.json";
import tickerItems from "./home/tickerItems.json";




const config = {
    homePage: {
        homeHeader,
        directions,
        navigation,
        tickerItems
    },
    aboutPage: {
        aboutCompany,
        persona,
        areasList
    },
    constructionPage: {
        constructionCategories,
        constructionHeaderContent
    },
    consumerPage: {
        consumerCategories,
        consumerHeaderContent
    },
    energyPage: {
        energyCategories,
        energyHeaderContent
    },
    itPage: {
        itCategories,
        itHeaderContent
    },
    vacancyPage:{
        vacancy
    },
    itemPage: {
        
    }

}

export default config;

