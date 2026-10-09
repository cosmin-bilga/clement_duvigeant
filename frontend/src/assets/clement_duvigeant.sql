-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : ven. 09 oct. 2026 à 14:43
-- Version du serveur : 11.5.2-MariaDB
-- Version de PHP : 8.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `clement_duvigeant`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

DROP TABLE IF EXISTS `admins`;
CREATE TABLE IF NOT EXISTS `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `failed_attempts` int(11) NOT NULL DEFAULT 0,
  `locked_until` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `failed_attempts`, `locked_until`) VALUES
(1, 'admin@admin.fr', '$2y$12$BGLyv3dfFUxzJgijX7U7vONXW3GFPZbk36eHNol/KVLdAdVsBBzEi', 0, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `content`
--

DROP TABLE IF EXISTS `content`;
CREATE TABLE IF NOT EXISTS `content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(200) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_location` (`location`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `content`
--

INSERT INTO `content` (`id`, `location`, `content`) VALUES
(3, 'homepage.chauffage', '<h3>Présentation de notre service d’installation de chauffage</h3><p>Nous mettons notre expertise à votre service pour vous offrir des installations de chauffage performantes et adaptées à vos besoins, que ce soit pour le gaz, le fioul, le bois ou les pompes à chaleur.</p><p><strong>Nos Services</strong></p><ul><li><p>Installation de Chauffage au Gaz, Fioul et Bois : Nous prenons en charge l’installation complète de votre système de chauffage, de l’étude préalable à la mise en service.</p></li><li><p>Installation de Pompes à Chaleur : Nous installons des pompes à chaleur performantes et écologiques, adaptées à votre logement et à vos besoins énergétiques.</p></li><li><p>Entretien et Réparation : Nous proposons des contrats d’entretien pour prolonger la durée de vie de votre équipement et des interventions rapides en cas de panne.</p></li><li><p>Conseils Personnalisés : Nos experts sont à votre disposition pour vous conseiller et vous aider à choisir la solution la plus adaptée à vos besoins.</p></li></ul><h3>Pierre PIerre</h3><p></p>'),
(2, 'homepage.hero.title', 'test'),
(4, 'homepage.climatisation', '<h3>\r\n                Présentation de notre service d’installation de climatisations\r\n              </h3>\r\n              <p>\r\n                Bienvenue chez ets Clément Duvigeant, votre expert en solutions\r\n                de climatisation à Esscouens. Forts de notre expérience et de\r\n                notre savoir-faire, nous nous engageons à vous offrir des\r\n                installations de climatisation de haute qualité, adaptées à vos\r\n                besoins spécifiques.\r\n              </p>\r\n              <strong>Pourquoi choisir ets Clément Duvigeant ?</strong>\r\n              <ul>\r\n                <li>\r\n                  Expertise et Professionnalisme : Nos techniciens qualifiés\r\n                  possèdent une vaste expérience dans l’installation de systèmes\r\n                  de climatisation. Nous assurons un service rapide, efficace et\r\n                  respectueux des normes de sécurité.\r\n                </li>\r\n                <li>\r\n                  Solutions Personnalisées : Chaque espace est unique. C’est\r\n                  pourquoi nous proposons des solutions sur mesure, adaptées à\r\n                  vos exigences et à votre budget. Que ce soit pour une maison,\r\n                  un bureau ou un commerce, nous avons la solution idéale pour\r\n                  vous.\r\n                </li>\r\n                <li>\r\n                  Produits de Qualité : Nous travaillons avec les meilleures\r\n                  marques du marché pour garantir des performances optimales et\r\n                  une durabilité accrue. Nos systèmes de climatisation sont à la\r\n                  pointe de la technologie, offrant confort et économies\r\n                  d’énergie.\r\n                </li>\r\n                <li>\r\n                  Service Après-Vente : Votre satisfaction est notre priorité.\r\n                  Nous offrons un service après-vente réactif et des contrats\r\n                  d’entretien pour assurer le bon fonctionnement de votre\r\n                  climatisation tout au long de l’année. Nos Services\r\n                </li>\r\n                <li>\r\n                  Installation de Climatisations : Nous prenons en charge\r\n                  l’installation complète de votre système de climatisation, de\r\n                  l’étude préalable à la mise en service.\r\n                </li>\r\n                <li>\r\n                  Entretien et Réparation : Nous proposons des contrats\r\n                  d’entretien pour prolonger la durée de vie de votre équipement\r\n                  et des interventions rapides en cas de panne.\r\n                </li>\r\n                <li>\r\n                  Conseils Personnalisés : Nos experts sont à votre disposition\r\n                  pour vous conseiller et vous aider à choisir la solution la\r\n                  plus adaptée à vos besoins.\r\n                </li>\r\n              </ul>\r\n              <strong className=\"center\">\r\n                Contactez-nous dès aujourd’hui !\r\n              </strong>\r\n            </div>'),
(5, 'homepage.eau', '<h3>Nos Services</h3><p>Nos systèmes de chauffage de l’eau sont à la pointe de la technologie, offrant confort et économies d’énergie.</p><ul><li><p>Installation de Chauffe-Eau Solaires : Nous installons des systèmes de chauffe-eau solaires qui utilisent l’énergie renouvelable du soleil pour chauffer votre eau, réduisant ainsi vos factures d’énergie et votre empreinte carbone.</p></li><li><p>Installation de Chauffe-Eau Électriques : Nous proposons des chauffe-eau électriques modernes et efficaces, adaptés à vos besoins en eau chaude.</p></li><li><p>Installation de Chauffe-Eau à Gaz ou Fioul : Nous installons des systèmes de chauffe-eau à gaz ou fioul pour une solution de chauffage de l’eau fiable et performante.</p></li><li><p>Test</p></li></ul><p></p>'),
(6, 'homepage.vmc', '<h3>Nos Services</h3>\r\n            <p>\r\n              Améliorez la qualité de l’air et le confort de votre habitation.\r\n            </p>\r\n            <ul>\r\n              <li>\r\n                Installation de VMC Simple Flux : Nous installons des systèmes\r\n                de VMC simple flux pour assurer un renouvellement constant de\r\n                l’air dans votre maison.\r\n              </li>\r\n              <li>\r\n                Installation de VMC Hygroréglable : Nous proposons des VMC\r\n                hygroréglables qui ajustent le débit d’air en fonction du taux\r\n                d’humidité, pour un confort optimal.\r\n              </li>\r\n              <li>\r\n                Installation de VMC Double Flux : Nous installons des VMC double\r\n                flux qui récupèrent la chaleur de l’air extrait pour chauffer\r\n                l’air entrant, offrant ainsi des économies d’énergie\r\n                significatives.\r\n              </li>\r\n              <li>\r\n                Entretien et Réparation : Nous proposons des contrats\r\n                d’entretien pour prolonger la durée de vie de votre équipement\r\n                et des interventions rapides en cas de panne.\r\n              </li>\r\n              <li>\r\n                Conseils Personnalisés : Nos experts sont à votre disposition\r\n                pour vous conseiller et vous aider à choisir la solution la plus\r\n                adaptée à vos besoins.\r\n              </li>\r\n            </ul>');

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE IF NOT EXISTS `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `location` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `name`, `location`) VALUES
(5, '5145ac91559de7c0271bbec05521dbca.png', 'homepage'),
(38, '2a839295f20f7157348d07d21d3b3110.png', 'slider'),
(37, 'a9c3542bc2682a28fb77ea8db1ca2abb.png', 'slider'),
(11, '7551f3e8c6f377cd02d875198ed5c493.png', 'chauffage.main'),
(13, '7e59d43f4c65d8a7bc6fee42fdcdc4b2.jpg', 'chauffage.side1'),
(14, '226836508ede37baf30dc06f06f7d279.jpg', 'chauffage.side2'),
(15, '534470b39e2c612dbc59ef2aba31a05c.jpg', 'chauffage.side3'),
(16, '56d9e89c15caa070cfe1fbf1febd539a.png', 'chauffage.logo1'),
(17, '24afbfda8215a1cda2f34101dc91f8ca.png', 'chauffage.logo2'),
(18, 'ea8e250a08372d216ef0b279f128ee88.jpg', 'climatisation.main'),
(19, '7b3791c9e5849edd3e40f0927a4e20c7.png', 'climatisation.logo1'),
(20, 'eae359b3e94644f0364695fda2d7e760.png', 'climatisation.logo2'),
(21, '9badf9b7b1aad638a1f94c4c37a09472.png', 'climatisation.logo3'),
(22, 'fbeb1ad39346cab719a8f2c365719d2d.png', 'eau.main1'),
(23, '40b93cbf0c4f011608fc82f5e9680841.jpg', 'eau.main2'),
(24, 'aee7ac8774f2536eee35c9aeb01c61a0.png', 'eau.main3'),
(25, '299de83010168be587112e75173a61f3.png', 'eau.logo1'),
(26, 'b1982990751bb2bcef32b2bb670319fe.png', 'eau.logo2'),
(27, '014515a68010fba032409e2e99a9b969.jpg', 'vmc.main'),
(28, 'fd2205a795e79da3b2881fce3ed8a901.png', 'vmc.logo'),
(29, '26cc2399709383159fb390a985088794.png', 'slider'),
(30, '8f068bc781d8c2043d17d2b4c3142074.png', 'slider'),
(31, 'a305754895b23b55ba3811e5d494467c.png', 'slider'),
(32, '13702dba9deb091682faa1f4cb1fdde2.png', 'slider'),
(39, '023aafa935bd1a6fb4249f47d59fc0e7.png', 'slider'),
(40, '2f9cd9e540ee14eca439967d46f1f81c.png', 'slider'),
(43, '0ff8f5bcb0c1eb21ea5e59b62e9c2e2f.png', 'slider');

-- --------------------------------------------------------

--
-- Structure de la table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `review_id` varchar(200) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `rating` int(11) NOT NULL,
  `snippet` text NOT NULL,
  `status` enum('approved','pending','rejected','') NOT NULL,
  `user_link` varchar(200) NOT NULL,
  `user_thumbnail` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `review_id` (`review_id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reviews`
--

INSERT INTO `reviews` (`id`, `review_id`, `user_name`, `date`, `rating`, `snippet`, `status`, `user_link`, `user_thumbnail`) VALUES
(29, 'ChdDSUhNMG9nS0VJQ0FnSUNyaS1IYi1nRRAB', 'Pascale De Primo', '2024-07-11', 5, 'A la fois professionnel et serviable. Excellent travail !', 'pending', 'https://www.google.com/maps/contrib/110844103694186172274?hl=fr', 'https://lh3.googleusercontent.com/a/ACg8ocLy7xQG5e7DkeYgmMMPu5zGDUUHYivUbA5Je8mZ8rysrwZQjQ=s120-c-rp-mo-br100'),
(24, 'Ci9DQUlRQUNvZENodHljRjlvT2tkRFNrVXhSa040VmxaUVNteG1TelJYYkc5S2JrRRAB', 'SANDRINE ROQUES', '2026-07-02', 5, 'Excellent professionnel. Travail très soigné. A recommander sans hésiter.', 'approved', 'https://www.google.com/maps/contrib/106512342142421542263?hl=fr', 'https://lh3.googleusercontent.com/a/ACg8ocLw311r-sSi_I69jSXtKaXFykyibmTsWkN4R45dLnCFDoLh8Q=s120-c-rp-mo-br100'),
(25, 'ChdDSUhNMG9nS0VJQ0FnSURyOXZQLXJBRRAB', 'Noélie ROUX MARQUES', '2024-07-17', 5, 'Clément est venu installer la climatisation réversible à notre domicile. Professionnel à l’écoute, efficace, et chantier laissé propre. Nous sommes très satisfaits.', 'pending', 'https://www.google.com/maps/contrib/103365384468615136956?hl=fr', 'https://lh3.googleusercontent.com/a-/ALV-UjV--slV8KiCZYVRsyxEYKLd3nO8ykqsSnQRDJXlkHoqNTLQaNss=s120-c-rp-mo-ba12-br100'),
(26, 'ChZDSUhNMG9nS0VJQ0FnSUMydDRpNlV3EAE', 'Nathan Albert', '2022-04-30', 5, 'Un grand merci !\n\nClément est un professionnel comme ceux sur lesquels on souhaiterait tomber plus souvent.\nPremière rencontre en Août 2021 pour effectuer un devis de pose de PAC avec changement d\'une vieille chaudière à fioul dans une maison que j\'envisageais d\'acheter. Clément a su se montrer d\'excellents conseils, qui m\'ont épargné bien des euros, tout en me conseillant au plus juste dans le choix de l\'appareil à installer.\n\nUne fois l\'achat de la dite maison faite, Clément avait anticipé les pénuries tout en me prévenant des délais, et a pu intervenir pour effectuer la pose de la PAC dès sa réception chez le fournisseur et en s\'adaptant à mon planning de travaux.\n\nLa pose est de qualité, le travail soigné, et Clément est toujours professionnel et à l\'écoute des questions et des interrogations, auxquelles il répond au mieux.\n\nClément a également installé un nouveau radiateur chez mes grands parents, qui sont ravis de son intervention, ainsi que du choix du radiateur, qui correspond parfaitement à la pièce et à l\'emplacement choisi pour son implantation.\n\nJ\'ai conseillé Clément à plusieurs reprises, et je le referai sans souci, alors faites vous va propre opinion en le contactant si vous recherchez un chauffagiste au pied de la montagne noire.', 'rejected', 'https://www.google.com/maps/contrib/110385074022996858839?hl=fr', 'https://lh3.googleusercontent.com/a/ACg8ocLP3wqvxvJ23k6IjvABrlBd6ucoSavIl1uGXKPTD52nub8aaw=s120-c-rp-mo-br100'),
(27, 'ChdDSUhNMG9nS0VJQ0FnSUNLaTlLSy1nRRAB', 'Michel MOUGENOT', '2021-04-18', 5, 'Jeune professionnel (avril 2021) , efficace , prompt à intervenir , prope et rapide , il m\'a soulagé d\'un problème de chauffe-eau qui durait depuis un an (d\'avec un artisan bien peu scrupuleux) , ça devenait dur pour moi en tant que personne agée de 72 ans et seul (veuf).', 'pending', 'https://www.google.com/maps/contrib/117748193229383391597?hl=fr', 'https://lh3.googleusercontent.com/a/ACg8ocLvn25nOQVTZX5BXRqvsL6lF9RTV6GbWK7ciqEXZQJZ3b8Y5A=s120-c-rp-mo-br100'),
(28, 'ChdDSUhNMG9nS0VJQ0FnSUNibk1MQ253RRAB', 'Aki Aki', '2024-07-24', 5, 'J\'avais un souci avec mon chauffe-eau j\'ai contacté Mr DUVIGEANT qui est intervenu rapidement,travail propre et surtout de bons conseils Merci encore MrDUVIGEANT🙏', 'pending', 'https://www.google.com/maps/contrib/103634931902927269186?hl=fr', 'https://lh3.googleusercontent.com/a-/ALV-UjVgDzarypM5Z52ZkStSuHctc_6GU_GfELvCJd6AbU-SP_r0p6ku=s120-c-rp-mo-ba12-br100');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
