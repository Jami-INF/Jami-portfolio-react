import React from "react";
import CardProject from "./CardProject";
import IA from "../../assets/projects/ia.png";
import Demineur from "../../assets/projects/demineur.jpg";
import Services from "../../assets/projects/services.jpg";
import Economax from "../../assets/projects/economax.png";
import Mealgenius from "../../assets/projects/MEALGENIUS.png";

const Projects = () => {
    return (
        <div className="text-white md:w-3/4 mt-32 mx-auto">
            <div className="">
                <CardProject
                    title="MEALGENIUS"
                    description="MealGenius est une application React Native qui permet de trouver des repas en fonction des ingrédients que l'utilisateur possède. MealGeniusAPI est une API utilisée par l'application. Elle est développée avec Quarkus et utilise une base de données MongoDB. L'application fonctionne comme un service REST qui gère les utilisateurs, les plats, les ingrédients et les recettes."
                    stack="React Native, Quarkus, MongoDB"
                    imagePath={Mealgenius}
                    projectURL="https://github.com/Jami-INF/MealGenius"
                    direction="right"
                />
            </div>
            <div className="">
                <CardProject
                    title="ÉCONOMAX"
                    description="Économax est une application reprenant le concept du site DealLabs en utilisant Symfony. Nous étions en équipe de deux et l’objectif était de reprendre le plus de fonctionnalités possible incluant les mails de notification, les alertes et toutes les fonctionnalités de base comme l’ajout de Deal ou les votes."
                    stack="Symfony, PHP, MySQL, Docker"
                    imagePath={Economax}
                    projectURL="https://github.com/Jami-INF/Economax_Corentin_Jami"
                    direction="left"
                />
            </div>
            <div className="">
                <CardProject
                    title="Composition de services - API REST"
                    description="L’objectif de ce projet était d’implanter trois services REST communicant ensemble. ShoppingService, développé à l’aide du framework SpringBoot est appelé par le client pour connaitre l’état des stocks de livres et de commander si besoins. Ce service appel le StockService (Jersey) permettant de connaitre la quantité de stock disponible. Le WholesalerService (Jersey) est responsable de la quantité des stocks et doit commander des nouveaux livres aux besoins. Ce projet a bien été réalisé et fonctionnel, ils sont hébergés sur Heroku pour deux et sur GAE pour l’autre. La base de données PostgreSQL est également sur Heroku et nous avons créé des clients PHP à l’aide de Guzzle."
                    stack="SpringBoot, Jersey, PHP, PostgreSQL, Heroku, GAE"
                    imagePath={Services}
                    projectURL="https://github.com/Jami-INF/projet-cloud"
                    direction="right"
                />
            </div>
            <div className="">
                <CardProject
                    title="Démineur - JavaScript"
                    description="Il s'agit d'un démineur développé en JavaScript. Il est possible de choisir le niveau de difficulté qui influe sur le nombre de mines et la taille de la grille. Le jeu est dévellopé en JavaScript basique et fonctionne parfaitement"
                    stack=""
                    imagePath={Demineur}
                    projectURL="https://jami-inf.github.io/demineur_JS/"
                    direction="left"
                />
            </div>
            <div className="">
                <CardProject
                    title="Computer vision - IA"
                    description="Dans le cadre d'un projet tutauré, j'ai travaillé sur un modèle d’IA capable d’identifier des objets sur des images dans le cadre d’une caméra de surveillance. Nous travaillons en groupe de cinq et nous avons séparé le projet en deux principales parties : deux élèves responsable de l’identification et trois de la segmentation d’images dont moi. En tant que chef du projet, j'ai du avoir une vue globale du projet ainsi que sur les jalons."
                    stack="Python, OpenCV, TensorFlow, Keras"
                    imagePath={IA}
                    projectURL="https://docs.google.com/document/d/11tEnY0qw9z-OqnjKgXOE3Xj9j7BjHHeYZXXqhwzXoqA/edit?usp=drive_link"
                    direction="right"
                />
            </div>
        </div>
    );
};

export default Projects;
