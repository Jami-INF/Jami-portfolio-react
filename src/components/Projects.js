import React from "react";
import CardProject from "./layout/CardProject";

const Projects = () => {
    return (
        <div className="text-white md:w-3/4 mt-32 mx-auto">
            <div className="">
                <CardProject
                    title="MEALGENIUS"
                    description="MealGenius est une application React Native qui permet de trouver des repas en fonction des ingrédients que l'utilisateur possède. MealGeniusAPI est une API utilisée par l'application. Elle est développée avec Quarkus et utilise une base de données MongoDB. L'application fonctionne comme un service REST qui gère les utilisateurs, les plats, les ingrédients et les recettes."
                    imagePath="https://res.cloudinary.com/dydmsj2hs/image/upload/v1690147202/MEALGENIUS_gbzps4.png"
                    projectURL="https://github.com/Jami-INF/MealGenius"
                    direction="right"
                />
            </div>
            <div className="">
                <CardProject
                    title="ÉCONOMAX"
                    description="Économax est une application reprenant le concept du site DealLabs en utilisant Symfony. Nous étions en équipe de deux et l’objectif était de reprendre le plus de fonctionnalités possible incluant les mails de notification, les alertes et toutes les fonctionnalités de base comme l’ajout de Deal ou les votes."
                    imagePath="https://d21buns5ku92am.cloudfront.net/69383/images/384549-Bildschirmfoto%202021-04-08%20um%2010.34.57-9b5db9-large-1617870945.png"
                    projectURL="https://github.com/Jami-INF/Economax_Corentin_Jami"
                    direction="left"
                />
            </div>
            <div className="">
                <CardProject
                    title="Composition de services - API REST"
                    description="L’objectif de ce projet était d’implanter trois services REST communicant ensemble. ShoppingService, développé à l’aide du Framwork SpringBoot est appelé par le client pour connaitre l’état des stocks de livres et de commander si besoins. Ce service appel le StockService (Jersey) permettant de connaitre la quantité de stock disponible. Le WholesalerService (Jersey) est responsable de la quantité des stocks et doit commander des nouveaux livres aux besoins. Ce projet a bien été réalisé et fonctionnel, ils sont hébergés sur Heroku pour deux et sur GAE pour l’autre. La base de données PostgreSQL est également sur Heroku et nous avons créé des clients PHP à l’aide de Guzzle."
                    imagePath="https://images-ext-1.discordapp.net/external/tLL-Cx3s-MNknmcUWgumCGYBMzH3UakIpehOtXtWdTw/https/res.cloudinary.com/dydmsj2hs/image/upload/v1690230526/Capture_d_%25C3%25A9cran_2023-07-24_222400_ch3ul9.jpg?width=1490&height=886"
                    projectURL="https://github.com/Jami-INF/projet-cloud"
                    direction="right"
                />
            </div>
            <div className="">
                <CardProject
                    title="Démineur - JavaScript"
                    description="Il s'agit d'un démineur développé en JavaScript. Il est possible de choisir le niveau de difficulté qui influe sur le nombre de mines et la taille de la grille. Le jeu est dévellopé en JavaScript basique et fonctionne parfaitement"
                    imagePath="https://res.cloudinary.com/dydmsj2hs/image/upload/v1690230852/Capture_d_%C3%A9cran_2023-07-24_223405_vfkc5n.jpg"
                    projectURL="https://jami-inf.github.io/demineur_JS/"
                    direction="right"
                />
            </div>
            <div className="">
                <CardProject
                    title="Computer vision - IA"
                    description="Dans le cadre d'un projet tutauré, j'ai travaillé sur un modèle d’IA capable d’identifier des objets sur des images dans le cadre d’une caméra de surveillance. Nous travaillons en groupe de cinq et nous avons séparé le projet en deux principales parties : deux élèves responsable de l’identification et trois de la segmentation d’images dont moi. En tant que chef du projet, j'ai du avoir une vue globale du projet ainsi que sur les jalons."
                    imagePath="https://miro.medium.com/v2/resize:fit:1400/1*8gmgaAkFdI-9OHY5cA93xQ.png"
                    projectURL=""
                    direction="left"
                />
            </div>
        </div>
    );
};

export default Projects;
