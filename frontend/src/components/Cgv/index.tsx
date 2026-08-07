import AOS from "aos";
import "aos/dist/aos.css";
import "./cgv.css";
import { useEffect } from "react";

function Cgv() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="cgv">
      <section>
        <h2>Mentions legales</h2>
        <div
          className="text"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <strong>Editeur</strong>
          <p>EI Clément Duvigeant</p>
          <p>11 impasse de la naouco</p>
          <p>81290 Escoussens</p>
          <p>siret: 45120708800035</p>
          <p>c-duvigeant@laposte.net</p>
          <p>07.81.11.54.30</p>
          <br></br>
          <strong>Directeur de la publication</strong>
          <p>
            Mr Clément Duvigeant en sa qualité de Président de la société Ets
            Clément Duvigeant
          </p>
          <br></br>
          <strong>Hébergement</strong>
          <a href="https://www.hostpapa.fr/">
            {" "}
            <p>HostPapa</p>
          </a>
          <a href="mailto:ventes@hostpapasupport.com">
            <p>ventes@hostpapasupport.com</p>
          </a>
          <a href="tel:+331 85 14 98 68">
            <p>01 85 14 98 68</p>
          </a>
          <br></br>
          <p>adresses postales:</p>
          <br></br>
          <p>Allemagne</p>
          <p>Eschersheimer Landstr.</p>
          <p>60322 Frankfurt am Main,</p>
          <p>Hesse</p>
          <br></br>
          <p>Australie</p>
          <p>903/50 Clarence St </p>
          <p>Sydney </p>
          <p>NSW 2000 </p>
          <br></br>
          <p>Canada </p>
          <p>5063 North Service Road </p>
          <p>Suite 102 </p>
          <p>Burlington, ON </p>
          <p>L7L 5H6 </p>
          <br></br>
          <p>États-Unis </p>
          <p>2430 Military Road #1013 </p>
          <p>Niagara Falls, NY </p>
          <p>14304-1745 </p>
          <br></br>
          <p>États-Unis </p>
          <p>3960 Howard Hughes </p>
          <p>Parkway </p>
          <p>Las Vegas, NV </p>
          <p>89169 </p>
          <br></br>
          <p>Royaume-Uni </p>
          <p>59 St. Martin's Lane </p>
          <p>Unit #201 </p>
          <p>London </p>
          <p>WC2N 4JS</p>
          <br></br>
          <strong>Conception et création</strong>
          <p>Aubrée pierre EI L-araignée</p>
          <a href="https://l-araignee.net/">
            <p>https://l-araignee.net/</p>
          </a>
          <p>Siret: 93079776600019</p>
          <p>rue des fonds d'heumont</p>
          <p>60700 Beaurepaire</p>
          <a href="mailto:contact@l-araignee.net">
            <p>contact@l-araignee.net</p>
          </a>
          <a href="tel:+33672094328">
            <p>tel: 06.72.09.43.28</p>
          </a>
        </div>
      </section>
      <section
        className="section"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        //data-aos-anchor-placement="top-bottom"
      >
        <h2>Conditions Générales de Vente</h2>
        <div className="text cgvText">
          <p>
            1-Réglementation applicable : Après signature du devis par les deux
            parties, le marché est conclu aux conditions fixées ci- après. Ces
            conditions s’appliquent malgré toute clause contraire figurant sur
            d’autres documents contractuels joints aux marchés, et notamment
            malgré toute clause contraire du C.C.A.P.
          </p>
          <p>
            2-Durée de validité de l’offre : La présente offre est valable pour
            une durée maximale d’un mois à compter de sa date de rédaction.
          </p>
          <p>
            3-Actualisation des prix : Les prix du présent devis seront
            actualisés à compter du mois de démarrage des travaux et durant
            l’exécution de ces derniers. L’actualisation sera faite en fonction
            de l’évolution de l’index BT (à compléter par un numéro d’index)
            entre la date d’établissement du devis et la date de chaque
            situation afin de tenir compte des variations économiques suivant la
            formule suivante : P (Prix actualisés) = Po (Prix du marché) * (Im
            (indice mois d’exécution) / Io (indice date du devis).
          </p>
          <p>
            4-Conditions suspensives du marché : 4.a. Autorisations : Le marché
            est conclu, le cas échéant, sous la condition suspensive de
            l’obtention des autorisations administratives ou de voisinage
            nécessaires à l’exécution du marché. 4.b. Recours à un prêt :
            Lorsque le client recourt à un prêt pour financer tout ou partie des
            travaux, il en informe l’entreprise et le marché est alors conclu
            dans les conditions prévues par le Code de la Consommation aux
            articles L 311-1 et suivants (en cas de recours à un crédit à la
            consommation) ou L 312-1 et suivants (en cas de recours à un crédit
            immobilier).
          </p>
          <p>
            5-Conditions d’exécution des travaux : L’entreprise se réserve le
            droit de refuser l’utilisation des matériaux ou produits fournis par
            le client. Lorsque le support révèle des sujétions imprévues, non
            décelables par l’entreprise, sauf au moment des travaux,
            l’entreprise pourra proposer au client des travaux supplémentaires
            qui ne seront réalisés qu’après acceptation de l’avenant au marché.
          </p>
          <p>
            6-Prolongation éventuelle des délais d’exécution : Sauf délai
            différent stipulé aux conditions particulières, les travaux seront
            exécutés dans un délai maximum d’un an après la signature du devis.
            Lorsqu’un délai ou une date d’exécution a été prévu aux conditions
            particulières, celui-ci n’est valable que si la signature
            matérialisant l’accord du client sur le devis intervient dans les 15
            jours suivant l’établissement du devis. Lorsque l’accord du client a
            été officialisé au-delà de ce délai de 15 jours, l’entreprise peut
            être contrainte de modifier le délai ou la date d’exécution prévu,
            en fonction des engagements qu’elle aura pu prendre par ailleurs
            entre-temps. Dans tous les cas, le délai d’exécution sera prolongé
            de la durée des journées d’intempérie, des périodes de grève ou de
            congés payés, et en cas de force majeure. De même, dans tous les
            cas, les interruptions de travaux provoquées par le client ou son
            représentant, par d’autres corps d’état ou par l’administration
            prolongent autant que de besoin le délai d’exécution. En cas de
            pénurie, si le matériau proposé dans le devis n’est plus disponible
            et qu’un matériau équivalent est disponible l’entreprise pourra
            alors proposer au client un avenant au devis afin que la prestation
            puisse avoir lieu. Dans ce cas, le client sera libre de valider cet
            avenant. Si ce dernier refuse la modification du devis il s’engage à
            attendre le retour en stock du produit initialement prévu mais ne
            pourra exercer aucun recours contre l’entreprise ni se prévaloir
            d’un quelconque préjudice en raison du retard dû à la pénurie.
          </p>
          <p>
            7-Réception de travaux : La réception des travaux, par laquelle le
            client déclare accepter l’ouvrage avec ou sans réserves, se fait en
            présence de l’entrepreneur et du client. Elle donne lieu à un
            procès-verbal signé des deux parties à raison d’un exemplaire pour
            l’entreprise et d’un exemplaire pour le client. En l’absence d’acte
            de réception signé par les deux parties, il est expressément convenu
            que tout paiement des travaux à hauteur d’au moins 95 % manifestera
            la volonté non équivoque du maître d’ouvrage de réceptionner sans
            réserve ; la date de réception sera alors celle du règlement qui
            permet d’atteindre ce seuil de 95 %.
          </p>
          <p>
            8-Acompte : La signature du devis devra être accompagnée du
            versement d’un acompte représentant 30 % du montant du devis ; en
            tout état de cause, les travaux ne commenceront pas avant le
            versement de cet acompte. L’acompte perçu sera déduit au moment de
            l’établissement de la facture définitive.
          </p>
          <p>
            9-Situations intermédiaires : Lorsque la durée des travaux sera
            supérieure à un mois, l’entreprise établira une situation des
            travaux réalisés le 30 de chaque mois. Ces situations devront être
            payées sous 8 jours à compter de leur date d’établissement. Tout
            retard de paiement autorisera l’entreprise, même sans mise en
            demeure préalable et sans préavis, à suspendre immédiatement la
            réalisation des travaux jusqu’au paiement complet de ses situations
            intermédiaires.
          </p>
          <p>
            10-Délai de paiement : Les factures de l’entreprise sont payables
            comptant, sans retenue de garantie et sans escompte. Tout retard de
            paiement entraînera l’application, sans mise en demeure préalable,
            d’intérêts de retard au taux légal majoré de 7 points, calculés à
            compter de la date de facturation. Si le client est un
            professionnel, une indemnité forfaitaire pour frais de recouvrement
            de 40 € sera due en cas de retard de paiement, en sus des pénalités
            de retard convenues dans les présentes conditions générales.
            Toujours si le client est un professionnel, l’indemnité pour frais
            de recouvrement pourra être majorée si les frais réellement engagés
            ont excédé la somme de 40 €, sur justification des frais exposés.
          </p>
          <p>
            11-Utilisation du devis : Les devis et les documents annexés sont et
            restent, en toutes circonstances, la propriété de l’entreprise. Ils
            ne peuvent être utilisés ou communiqués à une tierce personne
            qu’avec l’autorisation écrite du chef d’entreprise et doivent lui
            être restitués sans délai s’il n’est pas donné suite à la
            proposition de l’entreprise.
          </p>
          <p>
            12-Indivisibilité du devis : Le présent devis forme un tout cohérent
            et indivisible. Il doit être accepté dans son ensemble sans
            suppression de poste ni de ligne. En cas d’acceptation partielle,
            l’entreprise se réserve le droit de ne pas y donner suite ou de
            réviser ses conditions d’intervention.
          </p>
          <p>
            13-Clause de réserve de propriété : Par application de la loi du 12
            mai 1980, l’entreprise reste propriétaire des matériaux,
            marchandises et ouvrages facturés jusqu’au complet paiement.
            Néanmoins, la garde et les risques sont transférés au client dès
            l’achèvement des travaux, bien que la propriété reste à
            l’entreprise.
          </p>
          <p>
            14-TVA : Dans le cas d’une modification du taux de TVA par voie
            législative ou réglementaire après l’établissement du présent devis,
            le prix facturé et dû sera ajusté en fonction de l’évolution en
            résultant. Les parties conviennent qu’en cas de requalification
            fiscale sur le taux de TVA applicable aux travaux, le client
            s’engage à assumer la totalité de la régularisation (principal,
            pénalités et intérêts) et à rembourser l’entreprise rectifiée
            fiscalement des sommes versées à ce titre.
          </p>
          <p>
            15-Eco-contribution : Le montant de l’éco-contribution envisagée
            dans le cadre de la responsabilité élargie du producteur (REP) pour
            les produits et matériaux de construction pour le bâtiment,
            instituée par la loi du 10 février 2020 relative à la lutte contre
            le gaspillage, sera répercuté sur la facture en sus du montant du
            devis, dès la mise en application de cette contribution.
          </p>
          <p>
            16-Utilisation de photographies : Le client autorise l’entreprise à
            prendre des photographies des travaux et ouvrages réalisés et à les
            utiliser sur tout support de son choix, et notamment sur son site
            Internet.
          </p>
          <p>
            17-Médiation de la consommation : En cas de litige non résolu par
            une solution amiable et ayant fait l’objet d’une réclamation écrite
            adressée par le client consommateur à l’entreprise, vous pouvez
            soumettre le différend au médiateur de la consommation dont les
            coordonnées sont les suivantes : CM2C – 14, rue Saint-Jean – 75017
            PARIS Site internet : https://cm2c.net
          </p>
          <p>
            18-Données : Les informations recueillies sur le client font l’objet
            d’un traitement informatique réalisé par notre entreprise et sont
            indispensables au traitement de sa commande. Ces informations et
            données personnelles sont également conservées à des fins de
            sécurité, afin de respecter les obligations légales et
            réglementaires. Elles seront conservées aussi longtemps que
            nécessaire pour l’exécution des travaux commandés et des garanties
            éventuellement applicables à l’issue de ces travaux. Le responsable
            du traitement des données est notre entreprise, dont le nom, les
            coordonnées postales et @mail figurent au recto. L’accès aux données
            personnelles sera strictement limité aux employés du responsable de
            traitement, habilités à les traiter en raison de leurs fonctions.
            Les informations recueillies pourront éventuellement être
            communiquées à des tiers liés à l’entreprise par contrat pour
            l’exécution de tâches sous-traitées, sans que l’autorisation du
            Client ne soit nécessaire. Conformément à la loi n° 78-17 du 6
            janvier 1978 relative à l’informatique, aux fichiers et aux
            libertés, telle que modifiée par la loi n° 2004-801 du 6 août 2004,
            et par le Règlement Européen n°2016/.679, le Client dispose d’un
            droit d’accès, de rectification, d’effacement, et de portabilité des
            données le concernant, ainsi que du droit de s’opposer au traitement
            pour motif légitime, droits qu’il peut exercer en s’adressant au
            responsable de traitement à l’adresse postale ou @mail mentionnée
            ci-dessus, en joignant un justificatif de son identité valide. En
            cas de réclamation, le client peut contacter la Commission Nationale
            de l’Informatique et des Libertés (CNIL)
          </p>
        </div>
      </section>
    </div>
  );
}

export default Cgv;
