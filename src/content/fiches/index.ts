// Fichier généré automatiquement par scripts/build-index.mjs — ne pas modifier à la main.
import type { Fiche } from '../types';

import { ficheAbdomen } from './anat/abdomen';
import { ficheArthrologie } from './anat/arthrologie';
import { ficheAvantBrasMain } from './anat/avant-bras-main';
import { ficheCou } from './anat/cou';
import { ficheEpauleBras } from './anat/epaule-bras';
import { ficheHancheCuisse } from './anat/hanche-cuisse';
import { ficheJambePied } from './anat/jambe-pied';
import { ficheMyologieGenerale } from './anat/myologie-generale';
import { ficheOrganisationGenerale } from './anat/organisation-generale';
import { ficheOsteologieGenerale } from './anat/osteologie-generale';
import { fichePelvisPerinee } from './anat/pelvis-perinee';
import { ficheRachis } from './anat/rachis';
import { ficheTeteOsseuse } from './anat/tete-osseuse';
import { ficheThorax } from './anat/thorax';
import { ficheCelluleGeneralites } from './biocell/cellule-generalites';
import { ficheCycleCellulaire } from './biocell/cycle-cellulaire';
import { ficheCytosquelette } from './biocell/cytosquelette';
import { ficheJonctionsMatrice } from './biocell/jonctions-matrice';
import { ficheMeiose } from './biocell/meiose';
import { ficheMembranePlasmique } from './biocell/membrane-plasmique';
import { ficheMitochondrie } from './biocell/mitochondrie';
import { ficheNoyau } from './biocell/noyau';
import { ficheReticulumGolgi } from './biocell/reticulum-golgi';
import { ficheSignalisationApoptose } from './biocell/signalisation-apoptose';
import { ficheTraficVesiculaire } from './biocell/trafic-vesiculaire';
import { ficheTransportsMembranaires } from './biocell/transports-membranaires';
import { ficheAcidesAmines } from './bioch/acides-amines';
import { ficheChaineRespiratoire } from './bioch/chaine-respiratoire';
import { ficheCycleKrebs } from './bioch/cycle-krebs';
import { ficheEnzymologieGenerale } from './bioch/enzymologie-generale';
import { ficheGlucides } from './bioch/glucides';
import { ficheGlycolyse } from './bioch/glycolyse';
import { ficheHemoglobine } from './bioch/hemoglobine';
import { ficheLipides } from './bioch/lipides';
import { ficheMetabolismeAzote } from './bioch/metabolisme-azote';
import { ficheMetabolismeLipidique } from './bioch/metabolisme-lipidique';
import { ficheNucleotides } from './bioch/nucleotides';
import { ficheRegulationEnzymatique } from './bioch/regulation-enzymatique';
import { ficheStructureProteines } from './bioch/structure-proteines';
import { ficheAnnexesPlacenta } from './embryo/annexes-placenta';
import { ficheAnomaliesTeratogenese } from './embryo/anomalies-teratogenese';
import { ficheAppareilsGenitaux } from './embryo/appareils-genitaux';
import { ficheDelimitationOrganogenese } from './embryo/delimitation-organogenese';
import { ficheDeuxiemeSemaine } from './embryo/deuxieme-semaine';
import { ficheFecondation } from './embryo/fecondation';
import { ficheGastrulation } from './embryo/gastrulation';
import { ficheNeurulation } from './embryo/neurulation';
import { ficheOvogeneseCycle } from './embryo/ovogenese-cycle';
import { fichePremiereSemaine } from './embryo/premiere-semaine';
import { ficheSpermatogenese } from './embryo/spermatogenese';
import { ficheEpitheliumsGlandulaires } from './histo/epitheliums-glandulaires';
import { ficheEpitheliumsRevetement } from './histo/epitheliums-revetement';
import { ficheHistologieDigestiveRespiratoire } from './histo/histologie-digestive-respiratoire';
import { ficheHistologieUrinaireGenitale } from './histo/histologie-urinaire-genitale';
import { ficheMethodesHistologie } from './histo/methodes-histologie';
import { ficheSangHematopoiese } from './histo/sang-hematopoiese';
import { ficheTissuAdipeuxCartilage } from './histo/tissu-adipeux-cartilage';
import { ficheTissuConjonctif } from './histo/tissu-conjonctif';
import { ficheTissuNerveux } from './histo/tissu-nerveux';
import { ficheTissuOsseux } from './histo/tissu-osseux';
import { ficheTissusMusculaires } from './histo/tissus-musculaires';
import { ficheCirculation } from './physio/circulation';
import { ficheEchangesGazeux } from './physio/echanges-gazeux';
import { ficheEquilibreAcidoBasique } from './physio/equilibre-acido-basique';
import { ficheExcitabilite } from './physio/excitabilite';
import { ficheFiltrationGlomerulaire } from './physio/filtration-glomerulaire';
import { ficheFonctionTubulaire } from './physio/fonction-tubulaire';
import { ficheHomeostasie } from './physio/homeostasie';
import { ficheMecaniqueVentilatoire } from './physio/mecanique-ventilatoire';
import { ficheNeurophysiologie } from './physio/neurophysiologie';
import { fichePhysiologieCardiaque } from './physio/physiologie-cardiaque';
import { fichePhysiologieDigestive } from './physio/physiologie-digestive';
import { fichePhysiologieEndocrinienne } from './physio/physiologie-endocrinienne';
import { fichePhysiologieMusculaire } from './physio/physiologie-musculaire';
import { ficheBiaisConfusion } from './sante-publique/biais-confusion';
import { ficheConceptsSantePublique } from './sante-publique/concepts-sante-publique';
import { ficheDepistage } from './sante-publique/depistage';
import { ficheEtudesAnalytiques } from './sante-publique/etudes-analytiques';
import { ficheEtudesDescriptives } from './sante-publique/etudes-descriptives';
import { ficheIndicateursSante } from './sante-publique/indicateurs-sante';
import { ficheMesuresAssociation } from './sante-publique/mesures-association';
import { fichePrevention } from './sante-publique/prevention';
import { ficheProtectionSociale } from './sante-publique/protection-sociale';
import { ficheSystemeSante } from './sante-publique/systeme-sante';
import { ficheAcidesNucleiques } from './ue1/acides-nucleiques';
import { ficheCodeGenetique } from './ue1/code-genetique';
import { ficheGenetiqueMendelienne } from './ue1/genetique-mendelienne';
import { ficheGenetiquePopulations } from './ue1/genetique-populations';
import { ficheMaturationArn } from './ue1/maturation-arn';
import { ficheMutations } from './ue1/mutations';
import { ficheOrganisationGenome } from './ue1/organisation-genome';
import { ficheRegulationExpression } from './ue1/regulation-expression';
import { ficheReparationAdn } from './ue1/reparation-adn';
import { ficheReplication } from './ue1/replication';
import { ficheTraduction } from './ue1/traduction';
import { ficheTranscription } from './ue1/transcription';
import { ficheCinetiqueChimique } from './ue2/cinetique-chimique';
import { ficheEquilibresAcideBase } from './ue2/equilibres-acide-base';
import { ficheFonctionsOrganiques } from './ue2/fonctions-organiques';
import { ficheLiaisonsChimiques } from './ue2/liaisons-chimiques';
import { ficheMecanismesReactionnels } from './ue2/mecanismes-reactionnels';
import { ficheOxydoreduction } from './ue2/oxydoreduction';
import { ficheSolutionsConcentrations } from './ue2/solutions-concentrations';
import { ficheStereochimie } from './ue2/stereochimie';
import { ficheStructureAtome } from './ue2/structure-atome';
import { ficheThermodynamique } from './ue2/thermodynamique';
import { ficheBioelectricite } from './ue3/bioelectricite';
import { ficheEquilibresIoniques } from './ue3/equilibres-ioniques';
import { ficheEtatsMatiere } from './ue3/etats-matiere';
import { ficheImagerieRxTdm } from './ue3/imagerie-rx-tdm';
import { ficheInteractionsRayonnementMatiere } from './ue3/interactions-rayonnement-matiere';
import { ficheIrmEchographieScintigraphie } from './ue3/irm-echographie-scintigraphie';
import { ficheMecaniqueFluides } from './ue3/mecanique-fluides';
import { ficheOndesAcoustique } from './ue3/ondes-acoustique';
import { ficheOptiqueOeil } from './ue3/optique-oeil';
import { ficheProcessusTransport } from './ue3/phenomenes-transport';
import { ficheRayonnementsRadioactivite } from './ue3/rayonnements-radioactivite';
import { ficheSolutionsOsmolarite } from './ue3/solutions-osmolarite';
import { ficheComparaisonMoyennes } from './ue4/comparaison-moyennes';
import { ficheComparaisonProportions } from './ue4/comparaison-proportions';
import { ficheCorrelationRegression } from './ue4/correlation-regression';
import { ficheEchantillonnageEstimation } from './ue4/echantillonnage-estimation';
import { ficheIntervallesConfiance } from './ue4/intervalles-confiance';
import { ficheLoiNormale } from './ue4/loi-normale';
import { ficheLoisDiscretes } from './ue4/lois-discretes';
import { ficheProbabilites } from './ue4/probabilites';
import { ficheStatistiqueDescriptive } from './ue4/statistique-descriptive';
import { ficheTestsDiagnostiques } from './ue4/tests-diagnostiques';
import { ficheTestsHypotheses } from './ue4/tests-hypotheses';
import { ficheVariablesAleatoires } from './ue4/variables-aleatoires';
import { ficheBacteriologieGenerale } from './ue5/bacteriologie-generale';
import { ficheCmhPresentation } from './ue5/cmh-presentation';
import { ficheComplement } from './ue5/complement';
import { ficheHypersensibilitesVaccination } from './ue5/hypersensibilites-vaccination';
import { ficheImmuniteInnee } from './ue5/immunite-innee';
import { ficheImmunoglobulines } from './ue5/immunoglobulines';
import { ficheInflammation } from './ue5/inflammation';
import { ficheLymphocytesBReponseHumorale } from './ue5/lymphocytes-b-reponse-humorale';
import { ficheLymphocytesT } from './ue5/lymphocytes-t';
import { ficheOrganisationSystemeImmunitaire } from './ue5/organisation-systeme-immunitaire';
import { ficheParasitologieMycologie } from './ue5/parasitologie-mycologie';
import { ficheVirologieGenerale } from './ue5/virologie-generale';
import { ficheAbsorption } from './ue6/absorption';
import { ficheDeveloppementMedicament } from './ue6/developpement-medicament';
import { ficheDistribution } from './ue6/distribution';
import { ficheEffetsIndesirables } from './ue6/effets-indesirables';
import { ficheEliminationParametres } from './ue6/elimination-parametres';
import { ficheInteractionsMedicamenteuses } from './ue6/interactions-medicamenteuses';
import { ficheMedicamentDefinitions } from './ue6/medicament-definitions';
import { ficheMetabolismeMedicaments } from './ue6/metabolisme-medicaments';
import { fichePharmacodynamie } from './ue6/pharmacodynamie';
import { ficheRelationsDoseEffet } from './ue6/relations-dose-effet';
import { ficheVoiesAdministration } from './ue6/voies-administration';
import { ficheBioethique } from './ue7/bioethique';
import { ficheConsentementInformation } from './ue7/consentement-information';
import { ficheEpistemologie } from './ue7/epistemologie';
import { ficheEthiquePrincipes } from './ue7/ethique-principes';
import { ficheFinDeVie } from './ue7/fin-de-vie';
import { ficheHistoireMedecine } from './ue7/histoire-medecine';
import { fichePsychologieSante } from './ue7/psychologie-sante';
import { ficheRelationSoin } from './ue7/relation-soin';
import { ficheSecretResponsabilite } from './ue7/secret-responsabilite';
import { ficheSociologieSante } from './ue7/sociologie-sante';

export const TOUTES_LES_FICHES: Fiche[] = [
  ficheAbdomen,
  ficheArthrologie,
  ficheAvantBrasMain,
  ficheCou,
  ficheEpauleBras,
  ficheHancheCuisse,
  ficheJambePied,
  ficheMyologieGenerale,
  ficheOrganisationGenerale,
  ficheOsteologieGenerale,
  fichePelvisPerinee,
  ficheRachis,
  ficheTeteOsseuse,
  ficheThorax,
  ficheCelluleGeneralites,
  ficheCycleCellulaire,
  ficheCytosquelette,
  ficheJonctionsMatrice,
  ficheMeiose,
  ficheMembranePlasmique,
  ficheMitochondrie,
  ficheNoyau,
  ficheReticulumGolgi,
  ficheSignalisationApoptose,
  ficheTraficVesiculaire,
  ficheTransportsMembranaires,
  ficheAcidesAmines,
  ficheChaineRespiratoire,
  ficheCycleKrebs,
  ficheEnzymologieGenerale,
  ficheGlucides,
  ficheGlycolyse,
  ficheHemoglobine,
  ficheLipides,
  ficheMetabolismeAzote,
  ficheMetabolismeLipidique,
  ficheNucleotides,
  ficheRegulationEnzymatique,
  ficheStructureProteines,
  ficheAnnexesPlacenta,
  ficheAnomaliesTeratogenese,
  ficheAppareilsGenitaux,
  ficheDelimitationOrganogenese,
  ficheDeuxiemeSemaine,
  ficheFecondation,
  ficheGastrulation,
  ficheNeurulation,
  ficheOvogeneseCycle,
  fichePremiereSemaine,
  ficheSpermatogenese,
  ficheEpitheliumsGlandulaires,
  ficheEpitheliumsRevetement,
  ficheHistologieDigestiveRespiratoire,
  ficheHistologieUrinaireGenitale,
  ficheMethodesHistologie,
  ficheSangHematopoiese,
  ficheTissuAdipeuxCartilage,
  ficheTissuConjonctif,
  ficheTissuNerveux,
  ficheTissuOsseux,
  ficheTissusMusculaires,
  ficheCirculation,
  ficheEchangesGazeux,
  ficheEquilibreAcidoBasique,
  ficheExcitabilite,
  ficheFiltrationGlomerulaire,
  ficheFonctionTubulaire,
  ficheHomeostasie,
  ficheMecaniqueVentilatoire,
  ficheNeurophysiologie,
  fichePhysiologieCardiaque,
  fichePhysiologieDigestive,
  fichePhysiologieEndocrinienne,
  fichePhysiologieMusculaire,
  ficheBiaisConfusion,
  ficheConceptsSantePublique,
  ficheDepistage,
  ficheEtudesAnalytiques,
  ficheEtudesDescriptives,
  ficheIndicateursSante,
  ficheMesuresAssociation,
  fichePrevention,
  ficheProtectionSociale,
  ficheSystemeSante,
  ficheAcidesNucleiques,
  ficheCodeGenetique,
  ficheGenetiqueMendelienne,
  ficheGenetiquePopulations,
  ficheMaturationArn,
  ficheMutations,
  ficheOrganisationGenome,
  ficheRegulationExpression,
  ficheReparationAdn,
  ficheReplication,
  ficheTraduction,
  ficheTranscription,
  ficheCinetiqueChimique,
  ficheEquilibresAcideBase,
  ficheFonctionsOrganiques,
  ficheLiaisonsChimiques,
  ficheMecanismesReactionnels,
  ficheOxydoreduction,
  ficheSolutionsConcentrations,
  ficheStereochimie,
  ficheStructureAtome,
  ficheThermodynamique,
  ficheBioelectricite,
  ficheEquilibresIoniques,
  ficheEtatsMatiere,
  ficheImagerieRxTdm,
  ficheInteractionsRayonnementMatiere,
  ficheIrmEchographieScintigraphie,
  ficheMecaniqueFluides,
  ficheOndesAcoustique,
  ficheOptiqueOeil,
  ficheProcessusTransport,
  ficheRayonnementsRadioactivite,
  ficheSolutionsOsmolarite,
  ficheComparaisonMoyennes,
  ficheComparaisonProportions,
  ficheCorrelationRegression,
  ficheEchantillonnageEstimation,
  ficheIntervallesConfiance,
  ficheLoiNormale,
  ficheLoisDiscretes,
  ficheProbabilites,
  ficheStatistiqueDescriptive,
  ficheTestsDiagnostiques,
  ficheTestsHypotheses,
  ficheVariablesAleatoires,
  ficheBacteriologieGenerale,
  ficheCmhPresentation,
  ficheComplement,
  ficheHypersensibilitesVaccination,
  ficheImmuniteInnee,
  ficheImmunoglobulines,
  ficheInflammation,
  ficheLymphocytesBReponseHumorale,
  ficheLymphocytesT,
  ficheOrganisationSystemeImmunitaire,
  ficheParasitologieMycologie,
  ficheVirologieGenerale,
  ficheAbsorption,
  ficheDeveloppementMedicament,
  ficheDistribution,
  ficheEffetsIndesirables,
  ficheEliminationParametres,
  ficheInteractionsMedicamenteuses,
  ficheMedicamentDefinitions,
  ficheMetabolismeMedicaments,
  fichePharmacodynamie,
  ficheRelationsDoseEffet,
  ficheVoiesAdministration,
  ficheBioethique,
  ficheConsentementInformation,
  ficheEpistemologie,
  ficheEthiquePrincipes,
  ficheFinDeVie,
  ficheHistoireMedecine,
  fichePsychologieSante,
  ficheRelationSoin,
  ficheSecretResponsabilite,
  ficheSociologieSante,
];
