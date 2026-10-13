-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : mar. 13 oct. 2026 à 12:05
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
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `content`
--

INSERT INTO `content` (`id`, `location`, `content`) VALUES
(3, 'homepage.chauffage', '<h3>Présentation de notre service d’installation de chauffage</h3><p>Nous mettons notre expertise à votre service pour vous offrir des installations de chauffage performantes et adaptées à vos besoins, que ce soit pour le gaz, le fioul, le bois ou les pompes à chaleur.</p><p><strong>Nos Services</strong></p><ul><li><p>Installation de Chauffage au Gaz, Fioul et Bois : Nous prenons en charge l’installation complète de votre système de chauffage, de l’étude préalable à la mise en service.</p></li><li><p>Installation de Pompes à Chaleur : Nous installons des pompes à chaleur performantes et écologiques, adaptées à votre logement et à vos besoins énergétiques.</p></li><li><p>Entretien et Réparation : Nous proposons des contrats d’entretien pour prolonger la durée de vie de votre équipement et des interventions rapides en cas de panne.</p></li><li><p>Conseils Personnalisés : Nos experts sont à votre disposition pour vous conseiller et vous aider à choisir la solution la plus adaptée à vos besoins.</p></li></ul><h3>Pierre</h3><p></p>'),
(2, 'homepage.hero.title', 'test'),
(4, 'homepage.climatisation', '<h3>\r\n                Présentation de notre service d’installation de climatisations\r\n              </h3>\r\n              <p>\r\n                Bienvenue chez ets Clément Duvigeant, votre expert en solutions\r\n                de climatisation à Esscouens. Forts de notre expérience et de\r\n                notre savoir-faire, nous nous engageons à vous offrir des\r\n                installations de climatisation de haute qualité, adaptées à vos\r\n                besoins spécifiques.\r\n              </p>\r\n              <strong>Pourquoi choisir ets Clément Duvigeant ?</strong>\r\n              <ul>\r\n                <li>\r\n                  Expertise et Professionnalisme : Nos techniciens qualifiés\r\n                  possèdent une vaste expérience dans l’installation de systèmes\r\n                  de climatisation. Nous assurons un service rapide, efficace et\r\n                  respectueux des normes de sécurité.\r\n                </li>\r\n                <li>\r\n                  Solutions Personnalisées : Chaque espace est unique. C’est\r\n                  pourquoi nous proposons des solutions sur mesure, adaptées à\r\n                  vos exigences et à votre budget. Que ce soit pour une maison,\r\n                  un bureau ou un commerce, nous avons la solution idéale pour\r\n                  vous.\r\n                </li>\r\n                <li>\r\n                  Produits de Qualité : Nous travaillons avec les meilleures\r\n                  marques du marché pour garantir des performances optimales et\r\n                  une durabilité accrue. Nos systèmes de climatisation sont à la\r\n                  pointe de la technologie, offrant confort et économies\r\n                  d’énergie.\r\n                </li>\r\n                <li>\r\n                  Service Après-Vente : Votre satisfaction est notre priorité.\r\n                  Nous offrons un service après-vente réactif et des contrats\r\n                  d’entretien pour assurer le bon fonctionnement de votre\r\n                  climatisation tout au long de l’année. Nos Services\r\n                </li>\r\n                <li>\r\n                  Installation de Climatisations : Nous prenons en charge\r\n                  l’installation complète de votre système de climatisation, de\r\n                  l’étude préalable à la mise en service.\r\n                </li>\r\n                <li>\r\n                  Entretien et Réparation : Nous proposons des contrats\r\n                  d’entretien pour prolonger la durée de vie de votre équipement\r\n                  et des interventions rapides en cas de panne.\r\n                </li>\r\n                <li>\r\n                  Conseils Personnalisés : Nos experts sont à votre disposition\r\n                  pour vous conseiller et vous aider à choisir la solution la\r\n                  plus adaptée à vos besoins.\r\n                </li>\r\n              </ul>\r\n              <strong className=\"center\">\r\n                Contactez-nous dès aujourd’hui !\r\n              </strong>\r\n            </div>'),
(5, 'homepage.eau', '<h3>Nos Services</h3><p>Nos systèmes de chauffage de l’eau sont à la pointe de la technologie, offrant confort et économies d’énergie.</p><ul><li><p>Installation de Chauffe-Eau Solaires : Nous installons des systèmes de chauffe-eau solaires qui utilisent l’énergie renouvelable du soleil pour chauffer votre eau, réduisant ainsi vos factures d’énergie et votre empreinte carbone.</p></li><li><p>Installation de Chauffe-Eau Électriques : Nous proposons des chauffe-eau électriques modernes et efficaces, adaptés à vos besoins en eau chaude.</p></li><li><p>Installation de Chauffe-Eau à Gaz ou Fioul : Nous installons des systèmes de chauffe-eau à gaz ou fioul pour une solution de chauffage de l’eau fiable et performante.</p></li><li><p>Test</p></li></ul><p></p>'),
(6, 'homepage.vmc', '<h3>Nos Services</h3>\r\n            <p>\r\n              Améliorez la qualité de l’air et le confort de votre habitation.\r\n            </p>\r\n            <ul>\r\n              <li>\r\n                Installation de VMC Simple Flux : Nous installons des systèmes\r\n                de VMC simple flux pour assurer un renouvellement constant de\r\n                l’air dans votre maison.\r\n              </li>\r\n              <li>\r\n                Installation de VMC Hygroréglable : Nous proposons des VMC\r\n                hygroréglables qui ajustent le débit d’air en fonction du taux\r\n                d’humidité, pour un confort optimal.\r\n              </li>\r\n              <li>\r\n                Installation de VMC Double Flux : Nous installons des VMC double\r\n                flux qui récupèrent la chaleur de l’air extrait pour chauffer\r\n                l’air entrant, offrant ainsi des économies d’énergie\r\n                significatives.\r\n              </li>\r\n              <li>\r\n                Entretien et Réparation : Nous proposons des contrats\r\n                d’entretien pour prolonger la durée de vie de votre équipement\r\n                et des interventions rapides en cas de panne.\r\n              </li>\r\n              <li>\r\n                Conseils Personnalisés : Nos experts sont à votre disposition\r\n                pour vous conseiller et vous aider à choisir la solution la plus\r\n                adaptée à vos besoins.\r\n              </li>\r\n            </ul>'),
(7, 'cgv', '<p>             1-Réglementation applicable : Après signature du devis par les deux             parties, le marché est conclu aux conditions fixées ci- après. Ces             conditions s’appliquent malgré toute clause contraire figurant sur             d’autres documents contractuels joints aux marchés, et notamment             malgré toute clause contraire du C.C.A.P.           </p>           <p>             2-Durée de validité de l’offre : La présente offre est valable pour             une durée maximale d’un mois à compter de sa date de rédaction.           </p>           <p>             3-Actualisation des prix : Les prix du présent devis seront             actualisés à compter du mois de démarrage des travaux et durant             l’exécution de ces derniers. L’actualisation sera faite en fonction             de l’évolution de l’index BT (à compléter par un numéro d’index)             entre la date d’établissement du devis et la date de chaque             situation afin de tenir compte des variations économiques suivant la             formule suivante : P (Prix actualisés) = Po (Prix du marché) * (Im             (indice mois d’exécution) / Io (indice date du devis).           </p>           <p>             4-Conditions suspensives du marché : 4.a. Autorisations : Le marché             est conclu, le cas échéant, sous la condition suspensive de             l’obtention des autorisations administratives ou de voisinage             nécessaires à l’exécution du marché. 4.b. Recours à un prêt :             Lorsque le client recourt à un prêt pour financer tout ou partie des             travaux, il en informe l’entreprise et le marché est alors conclu             dans les conditions prévues par le Code de la Consommation aux             articles L 311-1 et suivants (en cas de recours à un crédit à la             consommation) ou L 312-1 et suivants (en cas de recours à un crédit             immobilier).           </p>           <p>             5-Conditions d’exécution des travaux : L’entreprise se réserve le             droit de refuser l’utilisation des matériaux ou produits fournis par             le client. Lorsque le support révèle des sujétions imprévues, non             décelables par l’entreprise, sauf au moment des travaux,             l’entreprise pourra proposer au client des travaux supplémentaires             qui ne seront réalisés qu’après acceptation de l’avenant au marché.           </p>           <p>             6-Prolongation éventuelle des délais d’exécution : Sauf délai             différent stipulé aux conditions particulières, les travaux seront             exécutés dans un délai maximum d’un an après la signature du devis.             Lorsqu’un délai ou une date d’exécution a été prévu aux conditions             particulières, celui-ci n’est valable que si la signature             matérialisant l’accord du client sur le devis intervient dans les 15             jours suivant l’établissement du devis. Lorsque l’accord du client a             été officialisé au-delà de ce délai de 15 jours, l’entreprise peut             être contrainte de modifier le délai ou la date d’exécution prévu,             en fonction des engagements qu’elle aura pu prendre par ailleurs             entre-temps. Dans tous les cas, le délai d’exécution sera prolongé             de la durée des journées d’intempérie, des périodes de grève ou de             congés payés, et en cas de force majeure. De même, dans tous les             cas, les interruptions de travaux provoquées par le client ou son             représentant, par d’autres corps d’état ou par l’administration             prolongent autant que de besoin le délai d’exécution. En cas de             pénurie, si le matériau proposé dans le devis n’est plus disponible             et qu’un matériau équivalent est disponible l’entreprise pourra             alors proposer au client un avenant au devis afin que la prestation             puisse avoir lieu. Dans ce cas, le client sera libre de valider cet             avenant. Si ce dernier refuse la modification du devis il s’engage à             attendre le retour en stock du produit initialement prévu mais ne             pourra exercer aucun recours contre l’entreprise ni se prévaloir             d’un quelconque préjudice en raison du retard dû à la pénurie.           </p>           <p>             7-Réception de travaux : La réception des travaux, par laquelle le             client déclare accepter l’ouvrage avec ou sans réserves, se fait en             présence de l’entrepreneur et du client. Elle donne lieu à un             procès-verbal signé des deux parties à raison d’un exemplaire pour             l’entreprise et d’un exemplaire pour le client. En l’absence d’acte             de réception signé par les deux parties, il est expressément convenu             que tout paiement des travaux à hauteur d’au moins 95 % manifestera             la volonté non équivoque du maître d’ouvrage de réceptionner sans             réserve ; la date de réception sera alors celle du règlement qui             permet d’atteindre ce seuil de 95 %.           </p>           <p>             8-Acompte : La signature du devis devra être accompagnée du             versement d’un acompte représentant 30 % du montant du devis ; en             tout état de cause, les travaux ne commenceront pas avant le             versement de cet acompte. L’acompte perçu sera déduit au moment de             l’établissement de la facture définitive.           </p>           <p>             9-Situations intermédiaires : Lorsque la durée des travaux sera             supérieure à un mois, l’entreprise établira une situation des             travaux réalisés le 30 de chaque mois. Ces situations devront être             payées sous 8 jours à compter de leur date d’établissement. Tout             retard de paiement autorisera l’entreprise, même sans mise en             demeure préalable et sans préavis, à suspendre immédiatement la             réalisation des travaux jusqu’au paiement complet de ses situations             intermédiaires.           </p>           <p>             10-Délai de paiement : Les factures de l’entreprise sont payables             comptant, sans retenue de garantie et sans escompte. Tout retard de             paiement entraînera l’application, sans mise en demeure préalable,             d’intérêts de retard au taux légal majoré de 7 points, calculés à             compter de la date de facturation. Si le client est un             professionnel, une indemnité forfaitaire pour frais de recouvrement             de 40 € sera due en cas de retard de paiement, en sus des pénalités             de retard convenues dans les présentes conditions générales.             Toujours si le client est un professionnel, l’indemnité pour frais             de recouvrement pourra être majorée si les frais réellement engagés             ont excédé la somme de 40 €, sur justification des frais exposés.           </p>           <p>             11-Utilisation du devis : Les devis et les documents annexés sont et             restent, en toutes circonstances, la propriété de l’entreprise. Ils             ne peuvent être utilisés ou communiqués à une tierce personne             qu’avec l’autorisation écrite du chef d’entreprise et doivent lui             être restitués sans délai s’il n’est pas donné suite à la             proposition de l’entreprise.           </p>           <p>             12-Indivisibilité du devis : Le présent devis forme un tout cohérent             et indivisible. Il doit être accepté dans son ensemble sans             suppression de poste ni de ligne. En cas d’acceptation partielle,             l’entreprise se réserve le droit de ne pas y donner suite ou de             réviser ses conditions d’intervention.           </p>           <p>             13-Clause de réserve de propriété : Par application de la loi du 12             mai 1980, l’entreprise reste propriétaire des matériaux,             marchandises et ouvrages facturés jusqu’au complet paiement.             Néanmoins, la garde et les risques sont transférés au client dès             l’achèvement des travaux, bien que la propriété reste à             l’entreprise.           </p>           <p>             14-TVA : Dans le cas d’une modification du taux de TVA par voie             législative ou réglementaire après l’établissement du présent devis,             le prix facturé et dû sera ajusté en fonction de l’évolution en             résultant. Les parties conviennent qu’en cas de requalification             fiscale sur le taux de TVA applicable aux travaux, le client             s’engage à assumer la totalité de la régularisation (principal,             pénalités et intérêts) et à rembourser l’entreprise rectifiée             fiscalement des sommes versées à ce titre.           </p>           <p>             15-Eco-contribution : Le montant de l’éco-contribution envisagée             dans le cadre de la responsabilité élargie du producteur (REP) pour             les produits et matériaux de construction pour le bâtiment,             instituée par la loi du 10 février 2020 relative à la lutte contre             le gaspillage, sera répercuté sur la facture en sus du montant du             devis, dès la mise en application de cette contribution.           </p>           <p>             16-Utilisation de photographies : Le client autorise l’entreprise à             prendre des photographies des travaux et ouvrages réalisés et à les             utiliser sur tout support de son choix, et notamment sur son site             Internet.           </p>           <p>             17-Médiation de la consommation : En cas de litige non résolu par             une solution amiable et ayant fait l’objet d’une réclamation écrite             adressée par le client consommateur à l’entreprise, vous pouvez             soumettre le différend au médiateur de la consommation dont les             coordonnées sont les suivantes : CM2C – 14, rue Saint-Jean – 75017             PARIS Site internet : https://cm2c.net           </p>           <p>             18-Données : Les informations recueillies sur le client font l’objet             d’un traitement informatique réalisé par notre entreprise et sont             indispensables au traitement de sa commande. Ces informations et             données personnelles sont également conservées à des fins de             sécurité, afin de respecter les obligations légales et             réglementaires. Elles seront conservées aussi longtemps que             nécessaire pour l’exécution des travaux commandés et des garanties             éventuellement applicables à l’issue de ces travaux. Le responsable             du traitement des données est notre entreprise, dont le nom, les             coordonnées postales et @mail figurent au recto. L’accès aux données             personnelles sera strictement limité aux employés du responsable de             traitement, habilités à les traiter en raison de leurs fonctions.             Les informations recueillies pourront éventuellement être             communiquées à des tiers liés à l’entreprise par contrat pour             l’exécution de tâches sous-traitées, sans que l’autorisation du             Client ne soit nécessaire. Conformément à la loi n° 78-17 du 6             janvier 1978 relative à l’informatique, aux fichiers et aux             libertés, telle que modifiée par la loi n° 2004-801 du 6 août 2004,             et par le Règlement Européen n°2016/.679, le Client dispose d’un             droit d’accès, de rectification, d’effacement, et de portabilité des             données le concernant, ainsi que du droit de s’opposer au traitement             pour motif légitime, droits qu’il peut exercer en s’adressant au             responsable de traitement à l’adresse postale ou @mail mentionnée             ci-dessus, en joignant un justificatif de son identité valide. En             cas de réclamation, le client peut contacter la Commission Nationale             de l’Informatique et des Libertés (CNIL)           </p>'),
(8, 'mentions_legales', '<strong>Editeur</strong>           <p>EI Clément Duvigeant</p>           <p>11 impasse de la naouco</p>           <p>81290 Escoussens</p>           <p>siret: 45120708800035</p>           <p>c-duvigeant@laposte.net</p>           <p>07.81.11.54.30</p>           <br></br>           <strong>Directeur de la publication</strong>           <p>             Mr Clément Duvigeant en sa qualité de Président de la société Ets             Clément Duvigeant           </p>           <br></br>           <strong>Hébergement</strong>           <a href=\"https://www.hostpapa.fr/\">             {\" \"}             <p>HostPapa</p>           </a>           <a href=\"mailto:ventes@hostpapasupport.com\">             <p>ventes@hostpapasupport.com</p>           </a>           <a href=\"tel:+331 85 14 98 68\">             <p>01 85 14 98 68</p>           </a>           <br></br>           <p>adresses postales:</p>           <br></br>           <p>Allemagne</p>           <p>Eschersheimer Landstr.</p>           <p>60322 Frankfurt am Main,</p>           <p>Hesse</p>           <br></br>           <p>Australie</p>           <p>903/50 Clarence St </p>           <p>Sydney </p>           <p>NSW 2000 </p>           <br></br>           <p>Canada </p>           <p>5063 North Service Road </p>           <p>Suite 102 </p>           <p>Burlington, ON </p>           <p>L7L 5H6 </p>           <br></br>           <p>États-Unis </p>           <p>2430 Military Road #1013 </p>           <p>Niagara Falls, NY </p>           <p>14304-1745 </p>           <br></br>           <p>États-Unis </p>           <p>3960 Howard Hughes </p>           <p>Parkway </p>           <p>Las Vegas, NV </p>           <p>89169 </p>           <br></br>           <p>Royaume-Uni </p>           <p>59 St. Martin\'s Lane </p>           <p>Unit #201 </p>           <p>London </p>           <p>WC2N 4JS</p>           <br></br>           <strong>Conception et création</strong>           <p>Aubrée pierre EI L-araignée</p>           <a href=\"https://l-araignee.net/\">             <p>https://l-araignee.net/</p>           </a>           <p>Siret: 93079776600019</p>           <p>rue des fonds d\'heumont</p>           <p>60700 Beaurepaire</p>           <a href=\"mailto:contact@l-araignee.net\">             <p>contact@l-araignee.net</p>           </a>           <a href=\"tel:+33672094328\">             <p>tel: 06.72.09.43.28</p>           </a>');

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
) ENGINE=MyISAM AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `name`, `location`) VALUES
(5, '5145ac91559de7c0271bbec05521dbca.png', 'homepage'),
(38, '2a839295f20f7157348d07d21d3b3110.png', 'slider'),
(37, 'a9c3542bc2682a28fb77ea8db1ca2abb.png', 'slider'),
(11, '874526f13b35f7a7f2bafb78297b96dc.png', 'chauffage.main'),
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
