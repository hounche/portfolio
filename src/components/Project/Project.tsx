import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import playstoreIcon from "../../assets/playstore-icon.svg";
import externalLink from "../../assets/external-link.svg";

import arzoo1 from "../../assets/arzoo1.png";
import arzoo2 from "../../assets/arzoo2.png";
import arzoo3 from "../../assets/arzoo3.png";

import bigo1 from "../../assets/bigo1.png";
import bigo2 from "../../assets/bigo2.png";
import bigo3 from "../../assets/bigo3.png";
import bigo4 from "../../assets/bigo4.png";
import bigo5 from "../../assets/bigo5.png";
import bigo6 from "../../assets/bigo6.png";

import ecoute2 from "../../assets/ecoute2.png";
import ecoute3 from "../../assets/ecoute3.png";

import pub1 from "../../assets/pub1.png";
import pub2 from "../../assets/pub2.png";
import pub3 from "../../assets/pub3.png";

import dom1 from "../../assets/dom1.png";
import dom2 from "../../assets/dom2.png";
import dom3 from "../../assets/dom3.png";

import robot1 from "../../assets/robot1.png";
import robot2 from "../../assets/robot2.png";
import robot3 from "../../assets/robot3.png";

import free1 from "../../assets/free1.png";
import free2 from "../../assets/free2.png";
import free3 from "../../assets/free3.png";

export function Project() {
  return (
    <Container id="project">
      <h2>Mes expériences professionnelles & projets personels</h2>
      <br />
      <h3>Expériences Professionnelles</h3>

      <div className="timeline">
        <div className="timeline-item left" data-aos="fade-up">
          <h4>Développeur Fullstack Java / Angular</h4>
          <p><em>CDI</em> - <em>Au sein de OptoPartner</em><br />Nov 2024 – Nov 2025</p>
          <p><strong>Contexte :</strong> Conception de l’outils SPOTTEUR sur la stack java/angular/React – developpement from scratch de l’application </p>
          <p><strong>Réalisations :</strong></p>
          <ul>
            <li>- Conception et développement des fonctionnalités back-end du système en Java 23 / Spring Boot, avec une architecture microservices modulaire, améliorant la performance et la maintenabilité du code de +30 %. </li>
            <li>- Développement d’interfaces utilisateurs dynamiques en Angular 19 et intégration de maquettes UI, offrant une expérience fluide et responsive, avec une réduction du temps de chargement moyen de 40 %. </li>
            <li>- Création et sécurisation d’APIs RESTful pour la communication interservices, garantissant la fiabilité des échanges et divisant par deux le taux d’erreurs d’intégration. </li>
            <li>- Mise en place de tests unitaires et d’intégration automatisés via JUnit et Mockito, atteignant une couverture de tests supérieure à 85 % et diminuant de 35 % les anomalies détectées après déploiement. </li>
            <li>- Optimisation et partitionnement de la base de données avec PostgreSQL et Liquibase, réduisant le temps de traitement des requêtes complexes de 50 %.</li>
            <li>- Conception et développement d’une version mobile et web mobile de la plateforme Spotteur avec React Native, Next.js, TypeScript et Node.js, élargissant la base utilisateurs de +60 % sur les supports mobiles. </li>
            <li>- Mise en place d’une chaîne CI/CD complète via Railway et Vercel, automatisant le build, les tests et le déploiement, ce qui a permis de réduire le temps de mise en production de 70 %. </li>
            <li>- Documentation technique et coordination agile sur Confluence et Jira, participation active aux cérémonies Scrum (daily, sprint review, rétrospectives).</li>
          </ul>
          <p><strong>Environnement technique :</strong></p>
          <p>Java 23, Spring Boot 3.x, Angular 19, Next.js 15, PostgreSQL, Firebase, H2 (Tests), Spring Security, JWT, Liquibase, Maven, JUnit5, Mockito, IntelliJ IDEA, VSCode, Jenkins, Azure DevOps, Railway, Vercel.</p>
        </div>

        <div className="timeline-item right" data-aos="fade-up" data-aos-delay="100">
          <br />
          <h4> Développeur Fullstack Java Angular & ML </h4>
          <p><em>Alternance</em> - <em>Au sein de GalaadInvest</em><br />Novembre 2023 – Septembre 2024</p>
          <p><strong>Contexte :</strong>  Développement d’une application d’intégration de données et de reporting pour l’analyse décisionnelle, couplée à la conception de modèles intelligents destinés à automatiser les processus métier et améliorer la productivité opérationnelle </p>
          <p><strong>Réalisation :</strong></p>
          <ul>
            <ul>
              <li>• Mission 1 :</li>
              <li>- Développement du front-end en Angular 17, intégrant des composants dynamiques et réactifs améliorant de 40 % la rapidité d’affichage des tableaux de bord.</li>
              <li>- Conception du back-end en Java 17 / Spring Boot, avec une architecture modulaire et sécurisée, garantissant une meilleure maintenabilité du code et une réduction de 25 % des anomalies post-déploiement.</li>
              <li>- Intégration et gestion des données via PostgreSQL, incluant des optimisations de requêtes SQL et l’utilisation de pipelines Hadoop pour le traitement distribué de gros volumes de données (gain de performance estimé à +50 % sur les traitements batch).</li>
              <li>- Conception d’APIs RESTful et mise en place d’une sécurité renforcée avec Spring Security & JWT, assurant la protection de l’ensemble des endpoints sensibles.</li>
              <li>- Automatisation du déploiement avec Jenkins CI/CD, réduisant les délais de mise en production de plus de 60 %.</li>

              <li>• Mission 2 :</li>
              <li>-Conception d’un modèle d’attribution intelligent des besoins clients aux prestataires, inspiré de l’architecture BabyAGI, permettant d’automatiser 70 % des tâches d’analyse manuelle.</li>
              <li>- Connexion du modèle à la base de données via SQLAlchemy, optimisant la synchronisation et la fiabilité des données entre le moteur de recommandation et le back-end applicatif.</li>
              <li>- Automatisation du processus décisionnel grâce à un agent autonome de recommandation, améliorant la rapidité d’affectation des demandes de 45 %.</li>
              <li>- Développement d’une interface Python / Angular pour la visualisation en temps réel des attributions et des recommandations générées par le modèle IA.</li>
              <li>- Mise en place d’une API REST sécurisée et déploiement cloud (Azure / AWS), garantissant scalabilité et résilience du service.</li>
            </ul>

          </ul>
          <p><strong>Environnement technique :</strong></p>
          <p>Java 17, Spring Boot, Angular 17, Python, SQLAlchemy, PostgreSQL, Hadoop, Jenkins, REST API, Spring Security, JWT, Azure, AWS, Docker, CI/CD, Agile (Scrum).</p>
        </div>

        <div className="timeline-item left" data-aos="fade-up" data-aos-delay="200">
          <h4>Développeur Python & Testeur</h4>
          <p><em>Stage</em> - <em>Au sein de TotalEnergies</em><br />Avril 2023 – Septembre 2023</p>
          <p><strong>Contexte :</strong> Participation au développement d’une suite de tests automatisés et à l’industrialisation des processus de validation logicielle, dans un objectif d’amélioration continue de la qualité applicative et de réduction des délais de mise en production. </p>
          <p><strong>Réalisations :</strong></p>
          <ul>
            <li>- Analyse des besoins métiers et des flux de données, en étroite collaboration avec les équipes fonctionnelles et techniques afin d’identifier les scénarios critiques à automatisiser.</li>
            <li>- Évaluation et conception de la solution technique de test, basée sur Python et PyTest, couvrant l’ensemble des cas critiques du cycle de vie applicatif.</li>
            <li>- Développement et déploiement d’une suite de tests automatisés permettant d’augmenter la couverture de tests de 50 % à 90 %, tout en réduisant les erreurs manuelles de près de 40 %.</li>
            <li>- Intégration de la stratégie de tests dans la pipeline CI/CD Jenkins, automatisant la validation des builds et accélérant le cycle de déploiement de 30 %.</li>
            <li>- Mise en place du CI/CD complet avec Jenkins et GitHub, garantissant un contrôle qualité continu et une meilleure traçabilité des versions.</li>
            <li>- Validation des tests automatisés et suivi qualité via des rapports générés automatiquement, facilitant la communication entre développeurs et testeurs.</li>
          </ul>

          <p><strong>Environnement technique :</strong></p>
          <p>Python, PyTest, Jenkins, GitHub, JavaScript, CI/CD, Agile/Scrum.</p>
        </div>

        <div className="timeline-item right" data-aos="fade-up" data-aos-delay="300">
          <h4>Développeur Python & IA</h4>
          <p><em>Stage</em> - <em>Au sein de Displayce</em><br />Mai 2022 – Août 2022</p>
          <p><strong>Contexte :</strong> Participation à la conception et au développement d’un système de publicité intelligent basé sur l’analyse comportementale des prospects, afin d’optimiser le ciblage marketing et la visibilité des campagnes publicitaires. </p>
          <p><strong>Réalisations :</strong></p>
          <ul>
            <li>- Analyse des besoins métiers et des attentes marketing.</li>
            <li>- Évaluation des solutions techniques pour le ciblage intelligent.</li>
            <li>- Conception de modèles d’intelligence artificielle pour l’analyse des données.</li>
            <li>- Segmentation locale des données utilisateurs.</li>
            <li>- Développement de l’interface graphique pour l’affichage des publicités dynamiques.</li>
            <li>- Mise en place de pipelines CI/CD pour automatiser le déploiement.</li>
            <li>- Validation des tests et vérification de la performance système.</li>
          </ul>
          <p><strong>Environnement technique :</strong></p>
          <p>Python, Bootstrap, WebSocket, JavaScript, HTML5/CSS3, CI/CD, Git, Agile/Scrum.</p>
        </div>

        <div className="timeline-item left" data-aos="fade-up" data-aos-delay="400"><br />
          <h4>Développeur Web & Responsable des Logs</h4>
          <p><em>JANGOLO Sarl</em><br />Juin 2021 – Août 2021</p>
          <p><strong>Contexte :</strong> Développement d’un système de monitoring des logs pour la détection d’anomalies et de cyberattaques.</p>
          <p><strong>Réalisations :</strong></p>
          <ul>
            <li>- Analyse des besoins métiers et techniques autour de la supervision applicative et de la sécurité des systèmes.</li>
            <li>- Conception d’une architecture centralisée basée sur la stack ELK (Elasticsearch, Logstash, Kibana) pour la collecte, le traitement et la visualisation en temps réel des logs.</li>
            <li>- Développement du back-end et du front-end du système en Laravel, avec intégration du mécanisme de collecte et de normalisation des logs applicatifs.</li>
            <li>- Automatisation du pipeline CI/CD, permettant le déploiement continu des modules d’analyse et de visualisation, réduisant le temps de livraison des nouvelles fonctionnalités de 50 %.</li>
            <li>- Mise en place d’un tableau de bord Kibana interactif, facilitant la détection d’anomalies et réduisant le temps moyen de détection d’incidents de 60 %.</li>
            <li>- Validation des tests (unitaires et d’intégration) avec JUnit, garantissant la fiabilité des traitements et la qualité des déploiements.</li>
          </ul>

          <p><strong>Environnement technique :</strong></p>
          <p>Laravel, ELK (Elasticsearch, Logstash, Kibana), JUnit, HTML5/CSS3, CI/CD, Git, Agile/Scrum. </p>
        </div>
      </div>

      <br />
      <h3>Projets</h3>
      <br />

      <div className="projects">
        {/* flipInX -> AOS flip-left */}
        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Dossier</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/hounche/PraiseWave" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.cmfipraise.com/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>PraiseWave</h3>
            <p>
              Application de gestion des églises, permettant aux utilisateurs de visualiser les musiques, les dons et les activités d'une. Développée avec React, Node.js et MongoDB, elle offre une interface utilisateur intuitive et des fonctionnalités robustes pour la gestion des données.
            </p>
            <p>Nb : Veuillez l'ouvrir en navigation privée car elle utilise des cookies pour ses fonctionnalités.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Java</li>
              <li>ReactNative</li>
              <li>TypeScript</li>
              <li>JUnit</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left" data-aos-delay="150">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Dossier</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/jveigne/recueilztfawards" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://www.accueilztfawards.com/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>ZTF Awards</h3>
            <p> Application web mobile, permettant aux utilisateurs d'avoir une vision globale d'une cérémonie évênementielle. L'application peut également s'obtenir à travers le scanne d'un Qr-code </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>NextJS 15</li>
              <li>JAVA</li>
              <li>FireBase</li>
              <li>API Rest</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left" data-aos-delay="300">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Dossier</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://play.google.com/store/apps/details?id=org.cmfi.cmfipraise" target="_blank" rel="noreferrer">
                <img src={playstoreIcon} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>CMFIPraise</h3>
            <p>
              Application mobile de musiques chrétiennes, permettant aux utilisateurs de découvrir et des chants religieux. Développée avec React Native, elle offre une expérience utilisateur fluide et intuitive, avec une interface moderne et des fonctionnalités de recherche avancées.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Java</li>
              <li>ReactNative</li>
              <li>API Rest</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left" data-aos-delay="450">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Dossier</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://spotter-app-sepia.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Spotter</h3>
            <p>Application de gestion de la qualité première des produits.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Java</li>
              <li>Angular</li>
              <li>Vercel</li>
              <li>MySQL</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left" data-aos-delay="600">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>BAI</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://olivedrab-hornet-656554.hostingersite.com/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>BAI</h3>
            <p>Projet freelance pour le compte d'un particulier, qui souhaitais développer son site internet et application mobile.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>TypeScript</li>
              <li>Java</li>
              <li>Vercel</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left" data-aos-delay="750">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Dossier</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://preview--blessed-gatherings-planner.lovable.app/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Gestion des églises</h3>
            <p>Application permettant de gérer les églises établies dans plusieurs villes, ou pays.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>FireBase</li>
              <li>Java</li>
              <li>TypeScript</li>
            </ul>
          </footer>
        </div>
      </div>

      <br /><br /><br />
      <h1>Quelques Captures d'écrans d'autres projets plus concrets</h1>

      <div className="captures">
        {/* Fades latéraux */}
        <div className="capturesline left" data-aos="fade-left">
          <h4>Ar Zoo</h4>
          <p><strong>Explication du projet :</strong></p>
          <ul>
            <li>
              Projet réalisé pour Maxime Balloufaud, un doctorant au Laboratoire HAVAE.
              AR-ZOO fait partie du projet TERAPACE. Développement d'un Zoo en réalité augmentée.
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>C#, Azure DevOPS, Unity, Visual Studio, GitHub, React Native.</p>
          <div className="captures-images">
            <img src={arzoo1} alt="Capture écran ARZoo1" />
            <img src={arzoo2} alt="Capture écran ARZoo2" />
            <img src={arzoo3} alt="Capture écran ARZoo3" />
          </div>
        </div>

        <div className="capturesline right" data-aos="fade-right">
          <h4>Sensation_Détection</h4>
          <p><strong>Explication du projet :</strong></p>
          <ul>
            <li>
              Ce système permet de détecter le ressenti des utilisateurs à travers de la reconnaissance vocale. 
              Il est capable de détecter les émotions telles que la joie, la tristesse, la colère, etc.
              Ps : Il peut également être utile pour les entreprise dans le secteur de la comm ou bancaire
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>Python, IA, WebSocket, JavaScript, Laravel, Unity, Visual Studio, GitHub</p>
          <div className="captures-images">
            <img src={ecoute2} alt="Capture écran ecoute2" />
            <img src={ecoute3} alt="Capture écran ecoute3" />
          </div>
        </div>

        <div className="capturesline left" data-aos="fade-left">
          <h4>Mini App robot</h4>
          <p><strong>Explication du projet :</strong></p>
          <ul>
            <li>
              Cette mini application développer en React Native, me permet d'effectuer une recherche ponctuelle 
              Dans une liste de robots, et permet de ressortir le robot correspondant à la recherche.
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>Python, WebSocket JavaScript, Bootstrap, CSS, IA, Visual Studio, GitHub, React Native.</p>
          <div className="captures-images">
            <img src={robot1} alt="Capture écran robot1" /><br /><br />
            <img src={robot2} alt="Capture écran robot2" /><br /><br />
            <img src={robot3} alt="Capture écran robot3" /><br /><br />
          </div>
        </div>

        <div className="capturesline right" data-aos="fade-right">
          <h4>Pub AI</h4>
          <p><strong>Explication du projet :</strong></p>
          <ul>
            <li>
              Développement d'un système de publicité intelligent basé sur la reconnaissance faciale, 
              permettant l'identification du genre et de l'âge des utilisateurs afin d'optimiser l'expérience utilisateur 
              et d'améliorer les stratégies marketing d'une entreprise.
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>Python, IA, Visual Studio, GitHub, JavaScript</p>
          <div className="captures-images">
            <img src={pub1} alt="Capture écran free1" />
            <img src={pub2} alt="Capture écran free2" />
            <img src={pub3} alt="Capture écran free3" />
          </div>
        </div>

        <div className="capturesline left" data-aos="fade-left">
          <h4>Free JS</h4>
          <p><strong>Explication du projet :</strong></p>
          <ul>
            <li>
              Ici, je voulais juste me faire plaisir en apprenant à utiliser Free JS,
              et j'ai donc réalisé quelques animations, et jeux simples.
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>React Native, Visual Studio, GitHub.</p>
          <div className="captures-images">
            <img src={free1} alt="Capture écran pub1" />
            <img src={free2} alt="Capture écran pub2" />
            <img src={free3} alt="Capture écran pub3" />
          </div>
        </div>

        <div className="capturesline right" data-aos="fade-right">
          <h4>Doomify</h4>
          <p><strong>Petit projet d'une IA générative:</strong></p>
          <ul>
            <li>
              Projet réalisé notamment pour approfondir mes connaissances en IA,
              Il permet de transformer une situation banale en une situation horrible, tout en générant une image, et un audio,
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>Python, ML, pytest, JavaScript</p>
          <div className="captures-images">
            <img src={dom1} alt="Capture écran dom1" />
            <img src={dom2} alt="Capture écran dom2" />
            <img src={dom3} alt="Capture écran dom3" />
          </div>
        </div>

        <div className="capturesline right" data-aos="fade-right">
          <h4>Bigo Bank</h4>
          <p><strong>Explication du projet :</strong></p>
          <ul>
            <li>
              BIGO BANK est une application de gestion de comptes bancaires développée dans une architecture hexagonale (ports & adapters). Elle simule les opérations d’un client bancaire : création de comptes, dépôts, retraits, gestion de découvert, plafonds d’épargne et génération de relevés mensuels.
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>Python 3.11, FastAPI, SQLAlchemy, SQLite, Pydantic, pytest, Docker, React + Vite, Vanilla CSS (sans Tailwind)</p>
          <div className="captures-images">
            <img src={bigo1} alt="Capture écran bigo1" />
            <img src={bigo2} alt="Capture écran bigo2" />
            <img src={bigo3} alt="Capture écran bigo3" />
            <img src={bigo4} alt="Capture écran bigo4" />
            <img src={bigo5} alt="Capture écran bigo5" />
            <img src={bigo6} alt="Capture écran bigo6" />
          </div>
        </div>
      </div>
    </Container>
  );
}
