// Fichier généré automatiquement par scripts/build-index.mjs — ne pas modifier à la main.
import type { Schema } from '../types';

import { schemaArticulationSynoviale } from './anat/articulation-synoviale';
import { schemaBassinOsseux } from './anat/bassin-osseux';
import { schemaCageThoracique } from './anat/cage-thoracique';
import { schemaCoupeAbdomen } from './anat/coupe-abdomen';
import { schemaCraneVues } from './anat/crane-vues';
import { schemaGenouLigaments } from './anat/genou-ligaments';
import { schemaPlansAxes } from './anat/plans-axes';
import { schemaPlexusBrachial } from './anat/plexus-brachial';
import { schemaRachisCourbures } from './anat/rachis-courbures';
import { schemaVertebreType } from './anat/vertebre-type';
import { schemaApoptose } from './biocell/apoptose';
import { schemaCelluleEucaryote } from './biocell/cellule-eucaryote';
import { schemaCycleCellulaire } from './biocell/cycle-cellulaire';
import { schemaCytosquelette } from './biocell/cytosquelette';
import { schemaMeiose } from './biocell/meiose';
import { schemaMembranePlasmique } from './biocell/membrane-plasmique';
import { schemaMitochondrie } from './biocell/mitochondrie';
import { schemaMitose } from './biocell/mitose';
import { schemaTransportsMembranaires } from './biocell/transports-membranaires';
import { schemaVoieSecretion } from './biocell/voie-secretion';
import { schemaBetaOxydation } from './bioch/beta-oxydation';
import { schemaChaineRespiratoire } from './bioch/chaine-respiratoire';
import { schemaClassificationAcidesAmines } from './bioch/classification-acides-amines';
import { schemaCycleKrebs } from './bioch/cycle-krebs';
import { schemaCycleUree } from './bioch/cycle-uree';
import { schemaGlycolyse } from './bioch/glycolyse';
import { schemaLiaisonPeptidique } from './bioch/liaison-peptidique';
import { schemaLipidesMembranaires } from './bioch/lipides-membranaires';
import { schemaStructureGlucides } from './bioch/structure-glucides';
import { schemaStructureProteines } from './bioch/structure-proteines';
import { schemaFecondation } from './embryo/fecondation';
import { schemaGametogenese } from './embryo/gametogenese';
import { schemaGastrulation } from './embryo/gastrulation';
import { schemaPlacenta } from './embryo/placenta';
import { schemaPremiereSemaine } from './embryo/premiere-semaine';
import { schemaEpitheliums } from './histo/epitheliums';
import { schemaHematopoiese } from './histo/hematopoiese';
import { schemaNeuroneSynapse } from './histo/neurone-synapse';
import { schemaOsteone } from './histo/osteone';
import { schemaSarcomere } from './histo/sarcomere';
import { schemaCirculationGenerale } from './physio/circulation-generale';
import { schemaContreCourant } from './physio/contre-courant';
import { schemaCourbeHemoglobine } from './physio/courbe-hemoglobine';
import { schemaDavenport } from './physio/davenport';
import { schemaEcgNormal } from './physio/ecg-normal';
import { schemaNephron } from './physio/nephron';
import { schemaPotentielAction } from './physio/potentiel-action';
import { schemaRevolutionCardiaque } from './physio/revolution-cardiaque';
import { schemaSystemeAutonome } from './physio/systeme-autonome';
import { schemaVolumesPulmonaires } from './physio/volumes-pulmonaires';
import { schemaCohorteCasTemoins } from './sante-publique/cohorte-cas-temoins';
import { schemaPrevention } from './sante-publique/prevention';
import { schemaTypesEtudes } from './sante-publique/types-etudes';
import { schemaChromatine } from './ue1/chromatine';
import { schemaDoubleHelice } from './ue1/double-helice';
import { schemaMaturationArn } from './ue1/maturation-arn';
import { schemaReplication } from './ue1/replication';
import { schemaTranscription } from './ue1/transcription';
import { schemaIrm } from './ue3/irm';
import { schemaOptiqueOeil } from './ue3/optique-oeil';
import { schemaOsmose } from './ue3/osmose';
import { schemaScanner } from './ue3/scanner';
import { schemaTubeRayonsX } from './ue3/tube-rayons-x';
import { schemaCourbeRoc } from './ue4/courbe-roc';
import { schemaIntervalleConfiance } from './ue4/intervalle-confiance';
import { schemaLoiNormale } from './ue4/loi-normale';
import { schemaTestsDiagnostiques } from './ue4/tests-diagnostiques';
import { schemaTestsHypotheses } from './ue4/tests-hypotheses';
import { schemaBacterieGram } from './ue5/bacterie-gram';
import { schemaCmhPresentation } from './ue5/cmh-presentation';
import { schemaComplement } from './ue5/complement';
import { schemaImmunoglobuline } from './ue5/immunoglobuline';
import { schemaReponseImmunitaire } from './ue5/reponse-immunitaire';
import { schemaAdme } from './ue6/adme';
import { schemaCourbeConcentration } from './ue6/courbe-concentration';
import { schemaDoseEffet } from './ue6/dose-effet';

export const TOUS_LES_SCHEMAS: Schema[] = [
  schemaArticulationSynoviale,
  schemaBassinOsseux,
  schemaCageThoracique,
  schemaCoupeAbdomen,
  schemaCraneVues,
  schemaGenouLigaments,
  schemaPlansAxes,
  schemaPlexusBrachial,
  schemaRachisCourbures,
  schemaVertebreType,
  schemaApoptose,
  schemaCelluleEucaryote,
  schemaCycleCellulaire,
  schemaCytosquelette,
  schemaMeiose,
  schemaMembranePlasmique,
  schemaMitochondrie,
  schemaMitose,
  schemaTransportsMembranaires,
  schemaVoieSecretion,
  schemaBetaOxydation,
  schemaChaineRespiratoire,
  schemaClassificationAcidesAmines,
  schemaCycleKrebs,
  schemaCycleUree,
  schemaGlycolyse,
  schemaLiaisonPeptidique,
  schemaLipidesMembranaires,
  schemaStructureGlucides,
  schemaStructureProteines,
  schemaFecondation,
  schemaGametogenese,
  schemaGastrulation,
  schemaPlacenta,
  schemaPremiereSemaine,
  schemaEpitheliums,
  schemaHematopoiese,
  schemaNeuroneSynapse,
  schemaOsteone,
  schemaSarcomere,
  schemaCirculationGenerale,
  schemaContreCourant,
  schemaCourbeHemoglobine,
  schemaDavenport,
  schemaEcgNormal,
  schemaNephron,
  schemaPotentielAction,
  schemaRevolutionCardiaque,
  schemaSystemeAutonome,
  schemaVolumesPulmonaires,
  schemaCohorteCasTemoins,
  schemaPrevention,
  schemaTypesEtudes,
  schemaChromatine,
  schemaDoubleHelice,
  schemaMaturationArn,
  schemaReplication,
  schemaTranscription,
  schemaIrm,
  schemaOptiqueOeil,
  schemaOsmose,
  schemaScanner,
  schemaTubeRayonsX,
  schemaCourbeRoc,
  schemaIntervalleConfiance,
  schemaLoiNormale,
  schemaTestsDiagnostiques,
  schemaTestsHypotheses,
  schemaBacterieGram,
  schemaCmhPresentation,
  schemaComplement,
  schemaImmunoglobuline,
  schemaReponseImmunitaire,
  schemaAdme,
  schemaCourbeConcentration,
  schemaDoseEffet,
];
