/**
 * triage — CBT Mock Test Platform (NEET-PG & INI-CET)
 * Core Application Engine, Strict JSON Validator & Triage Matrix Engine
 */

// ==========================================================================
const FALLBACK_NEET_DATA = {"examType":"neetpg","examTitle":"NEET-PG CBT Mock Test","totalBlocks":5,"defaultBlockDurationMinutes":42,"markingScheme":{"correct":4,"incorrect":-1,"unattempted":0},"sections":[{"id":"sec_a","name":"Section A","durationMinutes":42,"questions":[{"id":"neet_q_1","subject":["Anatomy","Orthopedics"],"system":["Upper Limb","Central Nervous System","Musculoskeletal System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Radial Nerve Injury & Spiral Groove Anatomy","reference":"Gray's Anatomy for Students, 4th ed., Ch. 7; Bailey & Love's Short Practice of Surgery, 28th ed.","text":"A 28-year-old motorcyclist sustains a mid-shaft fracture of the humerus. On clinical examination, he is unable to extend his wrist and digits at the metacarpophalangeal joints, with loss of sensation over the first dorsal web space. Which nerve and corresponding artery are most vulnerable to injury at this anatomical location?","options":["Radial nerve and profunda brachii artery","Median nerve and brachial artery","Ulnar nerve and superior ulnar collateral artery","Axillary nerve and posterior circumflex humeral artery"],"correctAnswerIndex":0,"explanation":"The radial nerve and profunda brachii artery course together along the spiral (radial) groove on the posterior surface of the mid-shaft of the humerus. Injury causes radial nerve palsy presenting as wrist drop and first dorsal web space sensory loss."},{"id":"neet_q_2","subject":["Physiology"],"system":["Cardiovascular System"],"format":"One-Liner","difficulty":"Easy","topic":"Cardiac Cycle Mechanics","reference":"Guyton and Hall Textbook of Medical Physiology, 14th ed., Ch. 9","text":"In a normal cardiac cycle, which phase immediately follows the closure of the atrioventricular (mitral and tricuspid) valves and precedes the opening of the aortic and pulmonary semilunar valves?","options":["Isovolumetric contraction phase","Rapid ventricular ejection phase","Isovolumetric relaxation phase","Reduced ventricular filling phase"],"correctAnswerIndex":0,"explanation":"Isovolumetric contraction begins with AV valve closure (producing the S1 heart sound). During this brief phase, all four valves are closed and intraventricular pressure rises steeply until it exceeds aortic/pulmonary diastolic pressure."},{"id":"neet_q_3","subject":["Anatomy","Surgery","ENT"],"system":["Head & Neck","Endocrine System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Laryngeal Nerve Anatomy & Thyroid Surgery","reference":"Bailey & Love's Short Practice of Surgery, 28th ed., Ch. 52","text":"During an elective subtotal thyroidectomy, the surgeon must carefully identify and preserve the external branch of the superior laryngeal nerve. Which muscle is exclusively innervated by this nerve?","options":["Cricothyroid muscle","Posterior cricoarytenoid muscle","Lateral cricoarytenoid muscle","Thyroarytenoid muscle"],"correctAnswerIndex":0,"explanation":"The external branch of the superior laryngeal nerve innervates only the cricothyroid muscle (the chief tensor of the vocal folds). All other intrinsic laryngeal muscles are innervated by the recurrent laryngeal nerve."},{"id":"neet_q_4","subject":["Physiology"],"system":["Renal & Urinary System","Cardiovascular System"],"format":"One-Liner","difficulty":"Medium","topic":"Tubuloglomerular Feedback & Juxtaglomerular Apparatus","reference":"Ganong's Review of Medical Physiology, 26th ed., Ch. 38","text":"The macula densa cells of the juxtaglomerular apparatus respond to changes in tubular fluid composition by sensing which of the following parameters?","options":["Sodium and chloride concentration in the early distal convoluted tubule","Potassium concentration in the proximal convoluted tubule","Hydrostatic pressure inside Bowman capsule","Osmolality of the medullary collecting duct"],"correctAnswerIndex":0,"explanation":"Macula densa cells located in the wall of the early distal tubule sense luminal NaCl concentration via the NKCC2 cotransporter, modulating renin release by adjacent juxtaglomerular cells through tubuloglomerular feedback."}]},{"id":"sec_b","name":"Section B","durationMinutes":42,"questions":[{"id":"neet_q_5","subject":["Biochemistry","Pediatrics"],"system":["Gastrointestinal System","Endocrine System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Glycogen Storage Diseases","reference":"Nelson Textbook of Pediatrics, 21st ed., Ch. 104; Harper's Illustrated Biochemistry, 32nd ed.","text":"A 5-month-old infant presents with severe fasting hypoglycemia, lactic acidosis, hyperuricemia, and massive hepatomegaly with doll-like facies. Liver biopsy demonstrates marked intracellular glycogen accumulation with normal glycogen structure. Which enzyme deficiency is responsible?","options":["Glucose-6-phosphatase","Liver glycogen phosphorylase","Lysosomal alpha-1,4-glucosidase","Amylo-1,6-glucosidase (debranching enzyme)"],"correctAnswerIndex":0,"explanation":"Von Gierke disease (Glycogen Storage Disease Type Ia) is caused by Glucose-6-phosphatase deficiency. It leads to severe fasting hypoglycemia, hepatomegaly, lactic acidosis, and hyperuricemia."},{"id":"neet_q_6","subject":["Pathology","Medicine"],"system":["Hematology & Oncology"],"format":"One-Liner","difficulty":"Easy","topic":"Chronic Myeloid Leukemia & Cytogenetics","reference":"Robbins and Cotran Pathologic Basis of Disease, 10th ed., Ch. 13","text":"The reciprocal chromosomal translocation t(9;22)(q34;q11), which forms the BCR-ABL1 chimeric fusion oncogene with constitutive tyrosine kinase activity, is the pathognomonic diagnostic hallmark of:","options":["Chronic Myeloid Leukemia (CML)","Burkitt Lymphoma","Acute Promyelocytic Leukemia (APML)","Follicular Lymphoma"],"correctAnswerIndex":0,"explanation":"The Philadelphia chromosome t(9;22)(q34;q11) creates the BCR-ABL1 fusion gene, diagnostic of Chronic Myeloid Leukemia (CML) and responsive to tyrosine kinase inhibitors like Imatinib."},{"id":"neet_q_7","subject":["Biochemistry","Dermatology"],"system":["Integumentary System"],"format":"One-Liner","difficulty":"Medium","topic":"DNA Repair Mechanisms & Genodermatoses","reference":"Harper's Illustrated Biochemistry, 32nd ed., Ch. 35; Rook's Textbook of Dermatology, 9th ed.","text":"A 4-year-old child presents with extreme photosensitivity, dry skin, multiple freckles on sun-exposed areas, and early development of basal cell carcinomas. This autosomal recessive disorder involves a defect in which DNA repair mechanism?","options":["Nucleotide excision repair","Base excision repair","Mismatch repair","Non-homologous end joining"],"correctAnswerIndex":0,"explanation":"Xeroderma Pigmentosum is caused by inherited defects in nucleotide excision repair (NER), preventing excision of ultraviolet radiation-induced pyrimidine (thymine) dimers."},{"id":"neet_q_8","subject":["Pathology","Medicine"],"system":["Renal & Urinary System","Immune System"],"format":"Clinical Vignette","difficulty":"Hard","topic":"Lupus Nephritis Pathology & Classification","reference":"Heptinstall's Pathology of the Kidney, 7th ed.; Harrison's Principles of Internal Medicine, 21st ed., Ch. 356","text":"A 42-year-old woman with systemic lupus erythematosus presents with worsening proteinuria (3.5 g/24h) and hematuria. Renal biopsy shows diffuse global endocapillary proliferation, wire-loop subendothelial immune deposits, and a 'full-house' immunofluorescence pattern. What is the ISN/RPS classification?","options":["Class IV Diffuse Lupus Nephritis","Class II Mesangial Proliferative Lupus Nephritis","Class III Focal Lupus Nephritis","Class V Membranous Lupus Nephritis"],"correctAnswerIndex":0,"explanation":"Class IV Diffuse Lupus Nephritis is characterized by involvement of >=50% of glomeruli, prominent wire-loop subendothelial deposits, and extensive IgG, IgA, IgM, C3, and C1q deposition (full-house)."}]},{"id":"sec_c","name":"Section C","durationMinutes":42,"questions":[{"id":"neet_q_9","subject":["Pharmacology","Medicine"],"system":["Cardiovascular System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Heart Failure Pharmacotherapy & ARNI Washout","reference":"2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure; Goodman & Gilman's Pharmacological Basis of Therapeutics, 14th ed.","text":"A 58-year-old male with NYHA Class III heart failure with reduced ejection fraction (EF 28%) is switched from Enalapril to Sacubitril/Valsartan. To minimize the risk of life-threatening angioedema, what is the mandatory minimum washout period required before initiating the ARNI?","options":["36 hours","12 hours","24 hours","72 hours"],"correctAnswerIndex":0,"explanation":"A strict 36-hour washout period is required when transitioning from an ACE inhibitor to Sacubitril/Valsartan to avoid dual inhibition of bradykinin degradation, which drastically increases angioedema risk."},{"id":"neet_q_10","subject":["Microbiology","Pathology"],"system":["Immune System"],"format":"One-Liner","difficulty":"Easy","topic":"Bacterial Exotoxins & Translation Arrest","reference":"Jawetz, Melnick & Adelberg's Medical Microbiology, 28th ed., Ch. 12","text":"Which of the following bacterial exotoxins acts by ADP-ribosylating host Elongation Factor-2 (EF-2), thereby terminating protein translation in eukaryotic cells?","options":["Diphtheria toxin","Cholera toxin","Tetanospasmin","Clostridium perfringens Alpha toxin"],"correctAnswerIndex":0,"explanation":"Diphtheria toxin produced by Corynebacterium diphtheriae (and Exotoxin A by Pseudomonas) inactivates EF-2 via ADP-ribosylation, arresting ribosomal peptide synthesis."},{"id":"neet_q_11","subject":["Pharmacology","Psychiatry"],"system":["Central Nervous System","Cardiovascular System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Monoamine Oxidase Inhibitors & Hypertensive Crisis","reference":"Katzung Basic & Clinical Pharmacology, 15th ed., Ch. 30","text":"A 32-year-old woman with a history of depression treated with Phenelzine attends a party where she consumes aged red wine and mature cheese. Two hours later, she arrives at the ER with severe throbbing headache, diaphoresis, and a blood pressure of 210/120 mmHg. What is the drug of choice for immediate management of this hypertensive crisis?","options":["Phentolamine","Propranolol","Methyldopa","Atropine"],"correctAnswerIndex":0,"explanation":"Tyramine reaction ('cheese reaction') in patients taking non-selective MAO inhibitors causes massive norepinephrine release. The treatment of choice is the reversible, non-selective alpha-adrenergic antagonist Phentolamine."},{"id":"neet_q_12","subject":["Microbiology"],"system":["Gastrointestinal System","Hepatobiliary System"],"format":"One-Liner","difficulty":"Medium","topic":"Viral Hepatitis Microbiology","reference":"Harrison's Principles of Internal Medicine, 21st ed., Ch. 338","text":"Which of the following hepatitis viruses is a single-stranded circular RNA virus that is replication-defective and requires the surface antigen coat of Hepatitis B virus (HBsAg) to assemble infectious virions?","options":["Hepatitis D virus (HDV)","Hepatitis C virus (HCV)","Hepatitis E virus (HEV)","Hepatitis A virus (HAV)"],"correctAnswerIndex":0,"explanation":"Hepatitis D (Delta) virus is a defective RNA viroid-like pathogen that depends entirely on HBV to provide HBsAg for packaging its envelope and establishing infection."}]},{"id":"sec_d","name":"Section D","durationMinutes":42,"questions":[{"id":"neet_q_13","subject":["Forensic Medicine"],"system":["General"],"format":"One-Liner","difficulty":"Medium","topic":"Post-Mortem Lividity & Toxicology","reference":"Reddy's The Essentials of Forensic Medicine and Toxicology, 34th ed., Ch. 7","text":"Post-mortem lividity (hypostasis or livor mortis) that displays a distinctive bright cherry-red coloration throughout dependent tissues is most characteristic of fatal poisoning by:","options":["Carbon monoxide","Hydrogen sulfide","Potassium cyanide","Phosphorus"],"correctAnswerIndex":0,"explanation":"Cherry-red hypostasis is characteristic of carbon monoxide poisoning due to the formation of carboxyhemoglobin. Cyanide causes a brick-pink/bright red discoloration, whereas hydrogen sulfide causes dark bluish-green lividity."},{"id":"neet_q_14","subject":["Community Medicine"],"system":["General"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Screening Tests & Predictive Values","reference":"Park's Textbook of Preventive and Social Medicine, 26th ed., Ch. 3","text":"A newly developed rapid diagnostic serological test for Dengue fever is evaluated against RT-PCR. If the prevalence of Dengue infection decreases in a population while the intrinsic sensitivity and specificity of the test remain constant, what will happen to the Positive Predictive Value (PPV)?","options":["PPV will decrease","PPV will increase","PPV will remain completely unchanged","PPV will become 100%"],"correctAnswerIndex":0,"explanation":"Positive Predictive Value (PPV) is directly proportional to disease prevalence. When prevalence decreases in the screened population, the proportion of true positives among all test positives falls, decreasing PPV."},{"id":"neet_q_15","subject":["Forensic Medicine"],"system":["Musculoskeletal System"],"format":"One-Liner","difficulty":"Easy","topic":"Thermal Injuries & Post-Mortem Stiffening","reference":"Modi's Medical Jurisprudence and Toxicology, 26th ed., Ch. 16","text":"The thermal coagulation and heat-induced stiffening of muscles that occurs in bodies exposed to high temperatures, causing characteristic flexion of limbs into a 'boxer's attitude', is termed:","options":["Pugilistic attitude (Pugilistic stance)","Cadaveric spasm","Rigor mortis","Heat hyperpyrexia"],"correctAnswerIndex":0,"explanation":"Pugilistic attitude results from heat coagulation and contracture of muscle proteins (flexors being stronger than extensors), giving the body a defensive boxing posture after burns."},{"id":"neet_q_16","subject":["Community Medicine","Pediatrics"],"system":["Immune System"],"format":"One-Liner","difficulty":"Easy","topic":"Universal Immunization Programme & Vaccine Administration","reference":"Park's Textbook of Preventive and Social Medicine, 26th ed., Ch. 5","text":"Under the Universal Immunization Programme (UIP) in India, which of the following vaccines is strictly administered as an intradermal injection at birth over the left upper arm?","options":["BCG vaccine","Hepatitis B birth dose","Oral Polio Vaccine (bOPV)","Pentavalent vaccine"],"correctAnswerIndex":0,"explanation":"BCG vaccine is given intradermally at birth (0.05 mL before 1 month, 0.1 mL after) over the left deltoid insertion to ensure uniform scar monitoring."}]},{"id":"sec_e","name":"Section E","durationMinutes":42,"questions":[{"id":"neet_q_17","subject":["Medicine"],"system":["Respiratory System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"COPD Management & Updated GOLD Guidelines","reference":"Global Initiative for Chronic Obstructive Lung Disease (GOLD) 2024 Report; Harrison's, 21st ed., Ch. 286","text":"A 64-year-old man with a 45 pack-year smoking history presents with progressive dyspnea and cough. Spirometry demonstrates post-bronchodilator FEV1/FVC of 0.54 and FEV1 44% predicted. He had two severe hospital admissions for acute exacerbations in the past 10 months. Blood eosinophil count is 380 cells/uL. According to updated GOLD guidelines, which initial maintenance regimen is indicated?","options":["Triple Inhaler Therapy (LABA + LAMA + Inhaled Corticosteroid)","Dual Bronchodilation alone (LABA + LAMA)","LAMA monotherapy","SABA as needed plus oral Theophylline"],"correctAnswerIndex":0,"explanation":"Under GOLD Group E (frequent exacerbators), initial Triple Therapy (LABA+LAMA+ICS) is recommended if blood eosinophils are >=300 cells/uL to significantly reduce exacerbations and hospitalization."},{"id":"neet_q_18","subject":["Surgery"],"system":["Gastrointestinal System","Hepatobiliary System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Acute Pancreatitis Initial Resuscitation","reference":"American College of Gastroenterology (ACG) Acute Pancreatitis Guidelines; Bailey & Love's, 28th ed.","text":"A 46-year-old female presents with acute severe epigastric pain radiating directly to her back, nausea, and vomiting. Serum lipase is 1,450 U/L. Ultrasound reveals multiple gallstones in the gallbladder and a dilated common bile duct (10 mm) without active cholangitis. What is the cornerstone of early initial management?","options":["Targeted intravenous fluid resuscitation with isotonic crystalloids and analgesia","Emergency open cholecystectomy within 6 hours","Routine prophylactic intravenous broad-spectrum carbapenems","Immediate diagnostic percutaneous transhepatic cholangiography"],"correctAnswerIndex":0,"explanation":"Early, goal-directed intravenous hydration with isotonic crystalloids (e.g., Ringer's Lactate) along with multimodal analgesia is the foundation of early acute pancreatitis therapy. Urgent ERCP is reserved for concurrent cholangitis."},{"id":"neet_q_19","subject":["Obstetrics & Gynecology","Pharmacology"],"system":["Reproductive System","Central Nervous System"],"format":"Clinical Vignette","difficulty":"Hard","topic":"Preeclampsia Management & Magnesium Toxicity","reference":"Williams Obstetrics, 26th ed., Ch. 34; Dutta's Textbook of Obstetrics, 9th ed.","text":"A 26-year-old primigravida at 34 weeks of gestation presents with blood pressure 170/114 mmHg, severe frontal headache, and hyperreflexia. Intravenous Magnesium Sulfate loading and maintenance infusion are commenced for seizure prophylaxis. Which clinical sign is the earliest reliable indicator of impending hypermagnesemia toxicity?","options":["Loss of deep tendon reflexes (patellar reflex)","Respiratory rate dropping below 12 breaths/minute","Complete heart block on electrocardiogram","Oliguria (<20 mL/hour)"],"correctAnswerIndex":0,"explanation":"Loss of deep tendon (patellar) reflexes occurs at serum magnesium levels of 8-10 mg/dL and serves as the earliest warning sign of toxicity before respiratory depression (12 mg/dL) or cardiac arrest."},{"id":"neet_q_20","subject":["Pediatrics"],"system":["Cardiovascular System"],"format":"One-Liner","difficulty":"Easy","topic":"Congenital Heart Disease & Ductus Arteriosus Patency","reference":"Nelson Textbook of Pediatrics, 21st ed., Ch. 458","text":"A 2-day-old cyanotic newborn is diagnosed with ductal-dependent congenital heart disease. Which continuous intravenous medication is required immediately to maintain patency of the ductus arteriosus prior to surgical repair?","options":["Prostaglandin E1 (Alprostadil)","Indomethacin","Ibuprofen","Furosemide"],"correctAnswerIndex":0,"explanation":"Prostaglandin E1 (Alprostadil) maintains patency of the ductus arteriosus in ductal-dependent lesions (e.g., Transposition of the Great Arteries, hypoplastic left heart syndrome). NSAIDs like Indomethacin close the ductus."}]}]};

const FALLBACK_INI_DATA = {"examType":"inicet","examTitle":"INI-CET CBT Mock Test","totalBlocks":4,"defaultBlockDurationMinutes":45,"markingScheme":{"correct":1,"incorrect":-0.333,"unattempted":0},"sections":[{"id":"block_1","name":"Block 1","durationMinutes":45,"questions":[{"id":"ini_q_1","subject":["Pharmacology","Medicine"],"system":["Cardiovascular System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"DOAC Pharmacokinetics & Renal Impairment","reference":"Goodman & Gilman's Pharmacological Basis of Therapeutics, 14th ed., Ch. 32; KDIGO 2023 Guidelines","text":"A 54-year-old male with chronic kidney disease (eGFR 26 mL/min/1.73m²) and persistent non-valvular atrial fibrillation requires anticoagulation for stroke prophylaxis. Which of the following Direct Oral Anticoagulants (DOACs) has the lowest degree of renal clearance (<30%) and is safest for use without extensive dosage reduction?","options":["Apixaban","Dabigatran etexilate","Rivaroxaban","Edoxaban"],"correctAnswerIndex":0,"explanation":"Apixaban undergoes predominantly fecal/biliary excretion (~73%) with only ~27% renal clearance, making it the preferred DOAC in patients with severe renal impairment compared to Dabigatran (80% renal) or Rivaroxaban (35% active renal)."},{"id":"ini_q_2","subject":["Biochemistry","Pathology"],"system":["Endocrine System"],"format":"Clinical Vignette","difficulty":"Hard","topic":"Congenital Adrenal Hyperplasia & Steroidogenesis","reference":"Williams Textbook of Endocrinology, 14th ed., Ch. 15; Nelson, 21st ed.","text":"A newborn presents with ambiguous genitalia, severe salt-wasting crisis, hyponatremia, and hyperkalemia on day 10 of life. Serum 17-hydroxyprogesterone is elevated markedly. Which specific cytochrome P450 steroid hydroxylase is deficient in over 90% of such congenital adrenal hyperplasia presentations?","options":["21-hydroxylase (CYP21A2)","11-beta-hydroxylase (CYP11B1)","17-alpha-hydroxylase (CYP17A1)","3-beta-hydroxysteroid dehydrogenase"],"correctAnswerIndex":0,"explanation":"21-hydroxylase deficiency (CYP21A2 gene) accounts for >90% of congenital adrenal hyperplasia. Shunting of steroid precursors into adrenal androgens causes ambiguous genitalia in females, while aldosterone deficiency produces salt wasting, hyponatremia, and hyperkalemia."},{"id":"ini_q_3","subject":["Anatomy","Radiology"],"system":["Central Nervous System"],"format":"One-Liner","difficulty":"Medium","topic":"Cavernous Sinus Neuroanatomy","reference":"Rhoton's Cranial Anatomy and Surgical Approaches; Snell's Clinical Neuroanatomy, 8th ed.","text":"In high-resolution magnetic resonance imaging of the cavernous sinus, which cranial nerve traverses the central venous lumen in direct physical contact with the cavernous internal carotid artery, making it most vulnerable to early compression by intracavernous aneurysms?","options":["Abducens nerve (CN VI)","Oculomotor nerve (CN III)","Trochlear nerve (CN IV)","Ophthalmic nerve (CN V1)"],"correctAnswerIndex":0,"explanation":"The Abducens nerve (CN VI) runs freely within the cavernous sinus venous space immediately inferolateral to the internal carotid artery. CN III, IV, V1, and V2 are embedded securely in the sinus lateral dural wall."},{"id":"ini_q_4","subject":["Microbiology","Medicine"],"system":["Immune System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Opportunistic Infections in Immunocompromised Host","reference":"CDC/NIH/IDSA Opportunistic Infections Guidelines; Harrison's, 21st ed., Ch. 219","text":"A 44-year-old renal transplant recipient on Tacrolimus and Mycophenolate Mofetil develops low-grade fever, dry cough, and exertional hypoxemia. Induced sputum with silver methenamine staining shows cup-shaped cysts with central dark spots. What is the definitive first-line therapeutic regimen?","options":["High-dose Trimethoprim-Sulfamethoxazole plus systemic corticosteroids","Intravenous Liposomal Amphotericin B","Inhaled Pentamidine isethionate","Oral Voriconazole"],"correctAnswerIndex":0,"explanation":"Pneumocystis jirovecii pneumonia (PJP) is treated first-line with high-dose TMP-SMX (cotrimoxazole). Adjunctive corticosteroids (prednisone) are mandated in moderate-to-severe disease (PaO2 <70 mmHg or A-a gradient >=35 mmHg) to prevent paradoxical deterioration."}]},{"id":"block_2","name":"Block 2","durationMinutes":45,"questions":[{"id":"ini_q_5","subject":["Pathology","Medicine"],"system":["Renal & Urinary System"],"format":"Clinical Vignette","difficulty":"Hard","topic":"Hereditary Nephropathies & Glomerular Basement Membrane","reference":"Robbins and Cotran Pathologic Basis of Disease, 10th ed., Ch. 20","text":"A 19-year-old male with persistent asymptomatic microscopic hematuria and sensorineural hearing loss undergoes renal biopsy. Electron microscopy of the glomerular basement membrane reveals alternating areas of thinning and marked lamellation with a 'basket-weave' appearance. What is the underlying molecular defect?","options":["Mutation in COL4A5 encoding the alpha-5 chain of type IV collagen","Defect in podocin (NPHS2) stomatin-family scaffold protein","Antibodies directed against phospholipase A2 receptor (PLA2R)","Splice-site mutation in PKD1 polycystin-1 protein"],"correctAnswerIndex":0,"explanation":"Alport syndrome is an X-linked dominant disorder caused by mutations in the COL4A5 gene encoding the alpha-5 chain of type IV collagen. EM demonstrates characteristic splitting, thickening, and lamellation of the lamina densa (basket-weave pattern) alongside sensorineural hearing loss and anterior lenticonus."},{"id":"ini_q_6","subject":["Physiology","Medicine"],"system":["Respiratory System"],"format":"One-Liner","difficulty":"Medium","topic":"High Altitude Acclimatization & Hemoglobin Kinetics","reference":"Guyton and Hall Textbook of Medical Physiology, 14th ed., Ch. 41","text":"During ascent to high altitude (4,000 meters above sea level), the respiratory alkalosis caused by hypoxic hyperventilation shifts the oxyhemoglobin dissociation curve to the left. Within 24-72 hours, which erythrocyte metabolic adaptation shifts the curve back to the right to facilitate tissue oxygen delivery?","options":["Increased production of 2,3-Bisphosphoglycerate (2,3-BPG)","Decreased carbonic anhydrase activity inside erythrocytes","Downregulation of glucose-6-phosphate dehydrogenase","Elevated intra-erythrocyte methemoglobin content"],"correctAnswerIndex":0,"explanation":"Erythrocytes respond to prolonged hypoxia and alkalemia by stimulating phosphofructokinase and bisphosphoglycerate mutase, increasing intra-erythrocyte 2,3-BPG synthesis. 2,3-BPG binds deoxyhemoglobin, stabilizing the T-state and right-shifting the dissociation curve."},{"id":"ini_q_7","subject":["Surgery","Radiology"],"system":["Gastrointestinal System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Intestinal Obstruction & Abdominal Radiology","reference":"Bailey & Love's Short Practice of Surgery, 28th ed., Ch. 69; Grainger & Allison's Diagnostic Radiology","text":"A 35-year-old male presents with acute intestinal obstruction. Abdominal CT demonstrates a segment of small bowel, its mesentery, and associated mesenteric vessels twisting around the axis of a prior surgical adhesive band, producing the classic 'whirlpool sign'. What is the diagnosis?","options":["Closed-loop small bowel volvulus","Retrograde jejunogastric intussusception","Paraduodenal internal herniation","Gallstone ileus with Rigler triad"],"correctAnswerIndex":0,"explanation":"The 'whirl sign' or 'whirlpool sign' on cross-sectional CT is created by the torsion of mesenteric vasculature and bowel loops around a central point of rotation, pathognomonic of volvulus / closed-loop obstruction requiring urgent exploration."},{"id":"ini_q_8","subject":["Pharmacology","Anesthesiology"],"system":["Central Nervous System"],"format":"Clinical Vignette","difficulty":"Hard","topic":"Malignant Hyperthermia & Calcium Channel Dynamics","reference":"Miller's Anesthesia, 9th ed., Ch. 44; Katzung, 15th ed.","text":"During emergency rapid sequence induction for laparotomy, a patient is administered Succinylcholine and Sevoflurane. Five minutes later, the anesthesiologist notes jaw muscle rigidity (masseter spasm), rapidly escalating end-tidal CO2 (from 35 to 88 mmHg), core temperature rising to 40.2°C, and ventricular tachycardia. What is the immediate antidote mechanism?","options":["Ryanodine receptor 1 (RYR1) antagonism by Dantrolene sodium","Acetylcholinesterase reactivation by Pralidoxime","Central dopamine receptor agonism by Bromocriptine","Voltage-gated calcium channel blockade by Verapamil"],"correctAnswerIndex":0,"explanation":"Malignant hyperthermia is caused by uncontrolled calcium release from the sarcoplasmic reticulum via mutated Ryanodine Receptor 1 (RYR1). Dantrolene sodium acts directly on RYR1 to inhibit calcium efflux and arrest the hypermetabolic cascade."}]},{"id":"block_3","name":"Block 3","durationMinutes":45,"questions":[{"id":"ini_q_9","subject":["Obstetrics & Gynecology","Pathology"],"system":["Reproductive System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Gestational Trophoblastic Disease & Cytogenetics","reference":"Williams Obstetrics, 26th ed., Ch. 20; Robbins, 10th ed., Ch. 22","text":"A 24-year-old woman presents with heavy vaginal bleeding and hyperemesis gravidarum at 11 weeks gestation. Serum beta-hCG is 240,000 mIU/mL. Pelvic ultrasound reveals a 'snowstorm' intrauterine appearance with bilaterally enlarged multilocular theca lutein cysts. Cytogenetic karyotyping of the evacuated tissue will most likely demonstrate:","options":["46,XX entirely of paternal origin (androgenetic)","69,XXY with triploid diandric fertilization","45,X monosomy of maternal origin","47,XX,+21 maternal meiotic non-disjunction"],"correctAnswerIndex":0,"explanation":"Complete hydatidiform mole is characteristically diploid (predominantly 46,XX, ~90%) arising when an anucleate 'empty' ovum is fertilized by a single haploid sperm that duplicates its genome (all 46 chromosomes are of paternal origin)."},{"id":"ini_q_10","subject":["Pediatrics","Microbiology"],"system":["Respiratory System"],"format":"Clinical Vignette","difficulty":"Easy","topic":"Pediatric Upper Airway Infections","reference":"Nelson Textbook of Pediatrics, 21st ed., Ch. 412","text":"A 2-year-old boy presents in winter with a 2-day history of rhinitis, followed by a hoarse voice, a harsh barking cough, and inspiratory stridor that worsens with agitation. Neck radiography shows subglottic tracheal narrowing ('steeple sign'). Which pathogen is the primary etiological agent?","options":["Parainfluenza virus Type 1","Respiratory Syncytial Virus (RSV)","Haemophilus influenzae type b","Adenovirus serotype 7"],"correctAnswerIndex":0,"explanation":"Acute laryngotracheobronchitis (Croup) is most commonly caused by Human Parainfluenza Virus Type 1 (followed by type 2 and 3). Classic findings include barking seal-like cough, inspiratory stridor, and subglottic narrowing ('steeple sign')."},{"id":"ini_q_11","subject":["Ophthalmology","Medicine"],"system":["Head & Neck"],"format":"One-Liner","difficulty":"Medium","topic":"Ischemic Optic Neuropathies & Giant Cell Arteritis","reference":"Kanski's Clinical Ophthalmology, 9th ed., Ch. 19; Harrison's, 21st ed., Ch. 363","text":"An elderly patient with acute painful loss of vision in the right eye is found to have an RAPD, optic disc swelling with chalky-white pallor, and an ESR of 98 mm/hr. Which artery is occluded in this classic presentation of Arteritic Anterior Ischemic Optic Neuropathy (AAION)?","options":["Short posterior ciliary arteries","Central retinal artery","Anterior ethmoidal artery","Lacrimal artery"],"correctAnswerIndex":0,"explanation":"Arteritic Anterior Ischemic Optic Neuropathy (AAION), secondary to Giant Cell Arteritis (Temporal Arteritis), is caused by occlusion of the short posterior ciliary arteries supplying the optic nerve head."},{"id":"ini_q_12","subject":["ENT","Surgery"],"system":["Head & Neck"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Temporal Bone Surgical Anatomy & Mastoidectomy","reference":"Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8th ed., Vol. 2","text":"During cortical mastoidectomy for chronic suppurative otitis media with cholesteatoma, the surgeon works in Macewen triangle. Which of the following defines the superior boundary of Macewen (suprameatal) triangle?","options":["Supramastoid crest (linea temporalis)","Posterosuperior margin of external acoustic meatus","Vertical tangent to posterior meatal wall","Spine of Henle"],"correctAnswerIndex":0,"explanation":"Macewen triangle (suprameatal triangle) borders: Superiorly by the supramastoid crest (temporal line); Anteroinferiorly by the posterosuperior rim of the bony external acoustic meatus; Posteriorly by a vertical line tangent to the meatus. It overlies the mastoid antrum."}]},{"id":"block_4","name":"Block 4","durationMinutes":45,"questions":[{"id":"ini_q_13","subject":["Psychiatry","Pharmacology"],"system":["Central Nervous System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Psychopharmacology & Renal Lithium Transport","reference":"Stahl's Essential Psychopharmacology, 5th ed.; Goodman & Gilman, 14th ed.","text":"A 29-year-old man with bipolar affective disorder receiving lithium carbonate develops polyuria (5.5 L/day), polydipsia, and mild hypernatremia. Water deprivation testing confirms nephrogenic diabetes insipidus. Which potassium-sparing diuretic is the agent of choice to block lithium entry through epithelial sodium channels (ENaC) in principal cells?","options":["Amiloride","Spironolactone","Eplerenone","Triamterene"],"correctAnswerIndex":0,"explanation":"Lithium enters principal cells of the collecting duct via luminal ENaC channels, inhibiting adenylyl cyclase. Amiloride selectively blocks ENaC, preventing lithium uptake and treating lithium-induced nephrogenic diabetes insipidus without aggravating lithium clearance."},{"id":"ini_q_14","subject":["Dermatology","Pathology"],"system":["Integumentary System"],"format":"One-Liner","difficulty":"Easy","topic":"Autoimmune Bullous Dermatoses","reference":"Fitzpatrick's Dermatology, 9th ed., Ch. 54; Rook's, 9th ed.","text":"Direct immunofluorescence of perilesional skin demonstrating intercellular epidermal IgG and C3 deposition in a classic 'fishnet' or 'chicken-wire' pattern against desmoglein-3 is diagnostic of:","options":["Pemphigus vulgaris","Bullous pemphigoid","Dermatitis herpetiformis","Erythema multiforme"],"correctAnswerIndex":0,"explanation":"Pemphigus vulgaris features autoantibodies against desmoglein 3 (and 1), producing suprabasal acantholysis with a 'fishnet' or 'honeycomb' intraepidermal intercellular pattern on direct immunofluorescence."},{"id":"ini_q_15","subject":["Orthopedics","Surgery"],"system":["Musculoskeletal System"],"format":"Clinical Vignette","difficulty":"Medium","topic":"Knee Ligamentous Injuries & Sports Orthopedics","reference":"Campbell's Operative Orthopaedics, 14th ed., Vol. 3; Rockwood and Green's Fractures","text":"A 23-year-old athlete sustains a knee injury with an audible 'pop' during rapid deceleration and pivoting. Examination demonstrates an anterior drawer test with no firm endpoint and a positive Lachman test. Which autograft tendon is most frequently harvested for anatomic reconstruction of the anterior cruciate ligament (ACL)?","options":["Bone-patellar tendon-bone or Hamstrings (semitendinosus and gracilis)","Achilles tendon","Tibialis anterior tendon","Peroneus brevis tendon"],"correctAnswerIndex":0,"explanation":"The most widely utilized autografts for ACL reconstruction are the central third bone-patellar tendon-bone (BPTB) graft and the quadrupled hamstring tendon autograft (semitendinosus and gracilis)."},{"id":"ini_q_16","subject":["Community Medicine","Medicine"],"system":["General"],"format":"One-Liner","difficulty":"Medium","topic":"Epidemiological Study Designs & Measures of Association","reference":"Gordis Epidemiology, 6th ed., Ch. 10; Park's, 26th ed.","text":"In epidemiological case-control studies investigating a rare disease, what statistical parameter is calculated as the primary measure of association between exposure and outcome?","options":["Odds Ratio (OR)","Relative Risk (RR)","Attributable Risk Percentage","Incidence Rate Ratio"],"correctAnswerIndex":0,"explanation":"Because incidence cannot be directly measured in retrospective case-control studies (unless total population at risk is known), the Odds Ratio (OR) is used as the primary estimate of relative risk (the rare disease assumption)."}]}]};

// 1. MBBS Subjects & Systems Taxonomy (Strict Compliance)
// ==========================================================================
const MBBS_SUBJECTS_LIST = [
  "Anatomy",
  "Anesthesiology",
  "Biochemistry",
  "Community Medicine",
  "Dermatology",
  "ENT",
  "Forensic Medicine",
  "Medicine",
  "Microbiology",
  "Obstetrics & Gynecology",
  "Ophthalmology",
  "Orthopedics",
  "Pathology",
  "Pediatrics",
  "Pharmacology",
  "Physiology",
  "Psychiatry",
  "Radiology",
  "Surgery"
];

const SUBJECT_ALIASES = {
  "fmt": "Forensic Medicine",
  "forensic medicine & toxicology": "Forensic Medicine",
  "forensic medicine and toxicology": "Forensic Medicine",
  "psm": "Community Medicine",
  "preventive and social medicine": "Community Medicine",
  "preventive & social medicine": "Community Medicine",
  "psm / community medicine": "Community Medicine",
  "otorhinolaryngology": "ENT",
  "ear, nose, throat": "ENT",
  "ear, nose and throat": "ENT",
  "general medicine": "Medicine",
  "internal medicine": "Medicine",
  "general surgery": "Surgery",
  "obg": "Obstetrics & Gynecology",
  "obgyn": "Obstetrics & Gynecology",
  "obstetrics and gynecology": "Obstetrics & Gynecology",
  "obstetrics & gynaecology": "Obstetrics & Gynecology",
  "paediatrics": "Pediatrics",
  "orthopaedics": "Orthopedics",
  "dvl": "Dermatology",
  "dermatology, venereology & leprosy": "Dermatology",
  "skin": "Dermatology",
  "radiodiagnosis": "Radiology",
  "radiotherapy": "Radiology",
  "anaesthesia": "Anesthesiology",
  "anaesthesiology": "Anesthesiology",
  "anesthesia": "Anesthesiology",
  "cardiology": "Medicine",
  "neurology": "Medicine",
  "pulmonology": "Medicine",
  "chest medicine": "Medicine",
  "respiratory medicine": "Medicine",
  "nephrology": "Medicine",
  "gastroenterology": "Medicine",
  "endocrinology": "Medicine",
  "rheumatology": "Medicine",
  "infectious diseases": "Medicine",
  "infectious disease": "Medicine",
  "hematology": "Pathology",
  "haematology": "Pathology",
  "urology": "Surgery",
  "neurosurgery": "Surgery",
  "plastic surgery": "Surgery",
  "cardiothoracic surgery": "Surgery",
  "pediatric surgery": "Surgery",
  "surgical oncology": "Surgery",
  "emergency medicine": "Medicine",
  "critical care": "Medicine",
  "intensive care": "Medicine",
  "geriatrics": "Medicine",
  "clinical pharmacology": "Pharmacology",
  "histopathology": "Pathology",
  "cytopathology": "Pathology",
  "surgical pathology": "Pathology",
  "medical microbiology": "Microbiology",
  "bacteriology": "Microbiology",
  "virology": "Microbiology",
  "parasitology": "Microbiology",
  "mycology": "Microbiology",
  "genetics": "Biochemistry",
  "medical biochemistry": "Biochemistry",
  "neuroanatomy": "Anatomy",
  "embryology": "Anatomy",
  "histology": "Anatomy",
  "gross anatomy": "Anatomy",
  "clinical anatomy": "Anatomy",
  "medical physiology": "Physiology",
  "neurophysiology": "Physiology",
  "clinical psychology": "Psychiatry",
  "behavioral science": "Psychiatry",
  "toxicology": "Forensic Medicine",
  "epidemiology": "Community Medicine",
  "public health": "Community Medicine",
  "biostatistics": "Community Medicine",
  "neonatology": "Pediatrics",
  "pediatric medicine": "Pediatrics",
  "gynecology": "Obstetrics & Gynecology",
  "obstetrics": "Obstetrics & Gynecology",
  "gynaecology": "Obstetrics & Gynecology",
  "ophthalmic surgery": "Ophthalmology",
  "ophthalmic medicine": "Ophthalmology",
  "eye": "Ophthalmology",
  "trauma surgery": "Surgery",
  "orthopedic surgery": "Orthopedics",
  "nuclear medicine": "Radiology",
  "interventional radiology": "Radiology"
};

const STANDARD_SYSTEMS_LIST = [
  "Cardiovascular System",
  "Central Nervous System",
  "Endocrine System",
  "Gastrointestinal System",
  "General",
  "Head & Neck",
  "Hematology & Oncology",
  "Hepatobiliary System",
  "Immune System",
  "Integumentary System",
  "Lower Limb",
  "Musculoskeletal System",
  "Renal & Urinary System",
  "Reproductive System",
  "Respiratory System",
  "Upper Limb"
];

const SYSTEM_ALIASES = {
  "cardiovascular": "Cardiovascular System",
  "cvs": "Cardiovascular System",
  "respiratory": "Respiratory System",
  "rs": "Respiratory System",
  "gastrointestinal": "Gastrointestinal System",
  "git": "Gastrointestinal System",
  "hepatobiliary": "Hepatobiliary System",
  "renal": "Renal & Urinary System",
  "urinary": "Renal & Urinary System",
  "nervous system": "Central Nervous System",
  "cns": "Central Nervous System",
  "musculoskeletal": "Musculoskeletal System",
  "msk": "Musculoskeletal System",
  "endocrine": "Endocrine System",
  "reproductive": "Reproductive System",
  "hematology": "Hematology & Oncology",
  "oncology": "Hematology & Oncology",
  "immune": "Immune System",
  "integumentary": "Integumentary System",
  "dermatology": "Integumentary System"
};

function normalizeSubject(val) {
  if (!val) return "Medicine";
  const raw = String(val).trim();
  const lower = raw.toLowerCase();
  if (SUBJECT_ALIASES[lower]) return SUBJECT_ALIASES[lower];
  const matched = MBBS_SUBJECTS_LIST.find(s => s.toLowerCase() === lower);
  if (matched) return matched;

  // Keyword heuristic fallback ensuring standard 19 MBBS subjects
  if (lower.includes('surg')) return 'Surgery';
  if (lower.includes('med')) return 'Medicine';
  if (lower.includes('path')) return 'Pathology';
  if (lower.includes('pharm')) return 'Pharmacology';
  if (lower.includes('ped') || lower.includes('paed')) return 'Pediatrics';
  if (lower.includes('gyn') || lower.includes('obs')) return 'Obstetrics & Gynecology';
  if (lower.includes('radio')) return 'Radiology';
  if (lower.includes('psych')) return 'Psychiatry';
  if (lower.includes('derm') || lower.includes('skin')) return 'Dermatology';
  if (lower.includes('micro')) return 'Microbiology';
  if (lower.includes('biochem')) return 'Biochemistry';
  if (lower.includes('anat')) return 'Anatomy';
  if (lower.includes('physio')) return 'Physiology';
  if (lower.includes('forensic') || lower.includes('tox')) return 'Forensic Medicine';
  if (lower.includes('communit') || lower.includes('prevent') || lower.includes('social')) return 'Community Medicine';
  if (lower.includes('ophth') || lower.includes('eye')) return 'Ophthalmology';
  if (lower.includes('ent') || lower.includes('ear') || lower.includes('throat')) return 'ENT';
  if (lower.includes('ortho') || lower.includes('bone')) return 'Orthopedics';
  if (lower.includes('anest') || lower.includes('anaest')) return 'Anesthesiology';

  return "Medicine";
}

function normalizeSystem(val) {
  if (!val) return "General";
  const raw = String(val).trim();
  const lower = raw.toLowerCase();
  if (SYSTEM_ALIASES[lower]) return SYSTEM_ALIASES[lower];
  const matched = STANDARD_SYSTEMS_LIST.find(s => s.toLowerCase() === lower);
  if (matched) return matched;

  // Keyword heuristic fallback
  if (lower.includes('cardio') || lower.includes('heart') || lower.includes('vascular')) return 'Cardiovascular System';
  if (lower.includes('neuro') || lower.includes('brain') || lower.includes('cns')) return 'Central Nervous System';
  if (lower.includes('respir') || lower.includes('lung') || lower.includes('pulmon')) return 'Respiratory System';
  if (lower.includes('gastro') || lower.includes('git') || lower.includes('bowel') || lower.includes('digest')) return 'Gastrointestinal System';
  if (lower.includes('hepato') || lower.includes('liver') || lower.includes('biliary')) return 'Hepatobiliary System';
  if (lower.includes('renal') || lower.includes('kidney') || lower.includes('urin') || lower.includes('nephro')) return 'Renal & Urinary System';
  if (lower.includes('musculo') || lower.includes('bone') || lower.includes('joint') || lower.includes('msk')) return 'Musculoskeletal System';
  if (lower.includes('endocrin') || lower.includes('thyroid') || lower.includes('diabetes')) return 'Endocrine System';
  if (lower.includes('hemat') || lower.includes('onco') || lower.includes('blood')) return 'Hematology & Oncology';
  if (lower.includes('immun')) return 'Immune System';
  if (lower.includes('integument') || lower.includes('derm') || lower.includes('skin')) return 'Integumentary System';
  if (lower.includes('reproduct') || lower.includes('pelvi') || lower.includes('genital')) return 'Reproductive System';
  if (lower.includes('head') || lower.includes('neck')) return 'Head & Neck';
  if (lower.includes('upper limb') || lower.includes('arm')) return 'Upper Limb';
  if (lower.includes('lower limb') || lower.includes('leg')) return 'Lower Limb';

  return "General";
}

function cleanOptionPrefix(text) {
  if (typeof text !== 'string') return String(text !== undefined && text !== null ? text : '');
  return text
    .trim()
    .replace(/^[A-Da-d1-4][\.\:\)]\s*/, '')
    .replace(/^\([A-Da-d1-4]\)\s*/, '')
    .replace(/^\[[A-Da-d1-4]\]\s*/, '')
    .replace(/^[A-Da-d1-4]\s+[-–—]\s+/, '')
    .trim();
}


function canonicalizeFormat(fmt, text = '') {
  if (typeof fmt === 'string') {
    const lower = fmt.trim().toLowerCase();
    if (lower.includes('vignette') || lower.includes('case')) return 'Clinical Vignette';
    if (lower.includes('one-liner') || lower.includes('oneliner') || lower.includes('fact')) return 'One-Liner';
    if (lower.includes('concept') || lower.includes('mechanism')) return 'Conceptual';
  }
  if (text && (text.length > 200 || /\b(year-old|presents with|history of|examination reveals|admitted with)\b/i.test(text))) {
    return 'Clinical Vignette';
  }
  if (text && /\b(mechanism|pathway|enzyme|deficiency|responsible for|mediated by)\b/i.test(text)) {
    return 'Conceptual';
  }
  return 'One-Liner';
}

function canonicalizeDifficulty(diff) {
  if (typeof diff === 'string') {
    const lower = diff.trim().toLowerCase();
    if (lower === 'easy') return 'Easy';
    if (lower === 'hard') return 'Hard';
    if (lower === 'medium') return 'Medium';
  }
  return 'Medium';
}

function shuffleQuestionOptions(question) {
  if (!question || !Array.isArray(question.options) || question.options.length <= 1) {
    return question;
  }

  const originalCorrect = typeof question.correctAnswerIndex === 'number' &&
    question.correctAnswerIndex >= 0 &&
    question.correctAnswerIndex < question.options.length
      ? question.correctAnswerIndex
      : 0;

  // Pair each option with its original index
  const indexed = question.options.map((opt, idx) => ({ opt, idx }));

  // Durstenfeld / Fisher-Yates unbiased shuffle algorithm
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = indexed[i];
    indexed[i] = indexed[j];
    indexed[j] = temp;
  }

  question.options = indexed.map(item => item.opt);
  const newCorrectIndex = indexed.findIndex(item => item.idx === originalCorrect);
  question.correctAnswerIndex = newCorrectIndex !== -1 ? newCorrectIndex : 0;
  return question;
}

function shuffleExamOptions(examData) {
  if (!examData || !Array.isArray(examData.sections)) return examData;
  examData.sections.forEach(sec => {
    if (Array.isArray(sec.questions)) {
      sec.questions.forEach(q => {
        shuffleQuestionOptions(q);
      });
    }
  });
  return examData;
}

function normalizeToArray(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val.map(v => String(v).trim()).filter(Boolean);
  return [String(val).trim()].filter(Boolean);
}

// ==========================================================================
// 2. Global Application State
// ==========================================================================
const AppState = {
  theme: localStorage.getItem('triage_theme') || 'dark',
  view: 'home', // 'home' | 'setup' | 'exam' | 'review'
  sessionMode: 'practice', // 'practice' | 'simulation'
  examMode: 'neetpg', // 'neetpg' | 'inicet'
  examData: null,
  isSampleTest: false,
  pendingExamPackage: null,
  practiceElapsedTime: 0,
  activeSectionIndex: 0,
  activeQuestionIndex: 0,
  timerInterval: null,
  sectionTimesLeft: {},
  responses: {},
  sectionStatus: {},
  reviewFilters: {
    matrix: 'all',
    result: 'all',
    confidence: 'all',
    bookmark: 'all',
    section: 'all',
    subject: 'all',
    system: 'all',
    difficulty: 'all',
    format: 'all'
  },
  reviewMasterTab: 'tab-question-review',
  analyticsSubtab: 'tab-triage-matrix',
  historyFilterExam: 'all',
  historySortOrder: 'latest', // 'latest' | 'oldest'
  reviewActiveTab: 'tab-question-review',
  reviewActiveQuestionId: null,
  sessionHistory: [],
  viewingAttemptId: null,
  customTestName: '',

  // AI Test Generator State
  setupMode: 'ai', // 'ai' | 'sample' | 'manual'
  aiScope: 'grand', // 'grand' | 'custom'
  aiActiveSubtab: 'scope', // 'scope' | 'format' | 'generate'
  aiSelectedSubjects: [],
  aiSelectedSystems: [],
  aiQuestionCount: 10,
  aiDifficulty: 'balanced', // 'balanced' | 'easy' | 'medium' | 'hard'
  aiStyle: 'mixed', // 'mixed' | 'oneliner' | 'conceptual' | 'vignette'
  aiModel: 'gemini-3.5-flash',
  aiTemperature: 0.15,
  aiAbortController: null,
  aiGeneratedData: null
};

let isAppInitializing = false;

// ==========================================================================
// 3. DOM Cache
// ==========================================================================
const DOM = {
  html: document.documentElement,
  themeToggleBtn: document.getElementById('theme-toggle-btn'),
  themeLabel: document.getElementById('theme-label'),
  headerExamBadge: document.getElementById('header-exam-badge'),
  dynamicNavActions: document.getElementById('dynamic-nav-actions'),

  // Views
  viewHome: document.getElementById('view-home'),
  viewSetup: document.getElementById('view-setup'),
  viewExam: document.getElementById('view-exam'),
  viewReview: document.getElementById('view-review'),

  // Landing / Home Elements
  btnLandingSample: document.getElementById('btn-landing-sample'),
  btnLandingSetup: document.getElementById('btn-landing-setup'),
  btnSetupBackHome: document.getElementById('btn-setup-back-home'),

  // Mode explanation & scope pill
  modeExplanationPractice: document.getElementById('mode-explanation-practice'),
  modeExplanationExam: document.getElementById('mode-explanation-exam'),
  aiScopeSummaryPill: document.getElementById('ai-scope-summary-pill'),

  // Setup Step Badges (Collapsible Accordion)
  badgeStepMode: document.getElementById('badge-step-mode'),
  badgeStepType: document.getElementById('badge-step-type'),
  badgeStepLength: document.getElementById('badge-step-length'),
  badgeStepSyllabus: document.getElementById('badge-step-syllabus'),
  badgeStepFormat: document.getElementById('badge-step-format'),
  badgeStepAi: document.getElementById('badge-step-ai'),

  // Sample Confirmation Modal
  modalSampleConfirm: document.getElementById('modal-sample-confirm'),
  btnSampleCancel: document.getElementById('btn-sample-cancel'),
  btnSampleConfirm: document.getElementById('btn-sample-confirm'),

  // Start Test Dialog Modal
  modalStartTest: document.getElementById('modal-start-test'),
  dialogStatMode: document.getElementById('dialog-stat-mode'),
  dialogStatExam: document.getElementById('dialog-stat-exam'),
  dialogStatQuestions: document.getElementById('dialog-stat-questions'),
  dialogStatTime: document.getElementById('dialog-stat-time'),
  dialogStatSyllabus: document.getElementById('dialog-stat-syllabus'),
  dialogStatDiffFormat: document.getElementById('dialog-stat-diff-format'),
  inputDialogTestName: document.getElementById('input-dialog-test-name'),
  btnDialogResetName: document.getElementById('btn-dialog-reset-name'),
  btnDialogGotoSetup: document.getElementById('btn-dialog-goto-setup'),
  btnDialogStartTest: document.getElementById('btn-dialog-start-test'),

  // Home / Setup Controls & Mode Switcher
  btnModePractice: document.getElementById('btn-mode-practice'),
  btnModeSimulation: document.getElementById('btn-mode-simulation'),
  modeBtnNeet: document.getElementById('mode-btn-neet'),
  modeBtnIni: document.getElementById('mode-btn-ini'),
  examFormatDetails: document.getElementById('exam-format-details'),
  inputTestName: document.getElementById('input-dialog-test-name') || document.getElementById('input-test-name'),
  btnResetTestName: document.getElementById('btn-dialog-reset-name') || document.getElementById('btn-reset-test-name'),
  tabSetupAi: document.getElementById('tab-setup-ai'),
  tabSetupSample: document.getElementById('tab-setup-sample'),
  tabSetupManual: document.getElementById('tab-setup-manual'),
  setupAiPanel: document.getElementById('setup-ai-panel'),
  setupSamplePanel: document.getElementById('setup-sample-panel'),
  setupManualPanel: document.getElementById('setup-manual-panel'),

  // Quick Sample Mock Test (Backward Compatibility)
  btnStartSampleDirect: document.getElementById('btn-start-sample-direct'),
  samplePanelTitle: document.getElementById('sample-panel-title'),
  samplePanelDesc: document.getElementById('sample-panel-desc'),
  sampleTagSections: document.getElementById('sample-tag-sections'),
  sampleTagQuestions: document.getElementById('sample-tag-questions'),
  sampleTagMarking: document.getElementById('sample-tag-marking'),

  // AI Wizard Subtabs & Panels (Legacy/Backward Compatibility)
  aiSubtabBar: document.getElementById('ai-subtab-bar'),
  tabAiStepScope: document.getElementById('tab-ai-step-scope'),
  tabAiStepFormat: document.getElementById('tab-ai-step-format'),
  tabAiStepGenerate: document.getElementById('tab-ai-step-generate'),
  aiPanelStepScope: document.getElementById('ai-panel-step-scope'),
  aiPanelStepFormat: document.getElementById('ai-panel-step-format'),
  aiPanelStepGenerate: document.getElementById('ai-panel-step-generate'),

  // AI Live Summary Bar
  aiConfigSummaryBar: document.getElementById('ai-config-summary-bar'),
  summaryTagMode: document.getElementById('summary-tag-mode'),
  summaryTagScope: document.getElementById('summary-tag-scope'),
  summaryTagCount: document.getElementById('summary-tag-count'),
  summaryTagDiff: document.getElementById('summary-tag-diff'),
  summaryTagModel: document.getElementById('summary-tag-model'),

  // AI Step Footer Buttons (Legacy)
  btnStepToFormat: document.getElementById('btn-step-to-format'),
  btnStepBackToScope: document.getElementById('btn-step-back-to-scope'),
  btnStepToGenerate: document.getElementById('btn-step-to-generate'),
  btnStepBackToFormat: document.getElementById('btn-step-back-to-format'),

  // AI Generator Elements
  selectAiScope: document.getElementById('select-ai-scope'),
  selectAiSubject: document.getElementById('select-ai-subject'),
  selectAiSystem: document.getElementById('select-ai-system'),
  selectAiDifficulty: document.getElementById('select-ai-difficulty'),
  selectAiStyle: document.getElementById('select-ai-style'),
  keyCompactStrip: document.getElementById('key-compact-strip'),
  keyStatusDisplay: document.getElementById('key-status-display'),
  keyMaskText: document.getElementById('key-mask-text'),
  btnChangeApiKey: document.getElementById('btn-change-api-key'),
  keyEditorRow: document.getElementById('key-editor-row'),
  btnCancelKeyEdit: document.getElementById('btn-cancel-key-edit'),
  inputGeminiApiKey: document.getElementById('input-gemini-api-key'),
  btnToggleKeyMask: document.getElementById('btn-toggle-key-mask'),
  btnSaveApiKey: document.getElementById('btn-save-api-key'),
  btnClearApiKey: document.getElementById('btn-clear-api-key'),
  aiKeyStatusPill: document.getElementById('ai-key-status-pill'),
  btnScopeGrand: document.getElementById('btn-scope-grand'),
  btnScopeCustom: document.getElementById('btn-scope-custom'),
  aiCustomScopeDrawer: document.getElementById('ai-custom-scope-drawer'),
  countSelectedSubjects: document.getElementById('count-selected-subjects'),
  countSelectedSystems: document.getElementById('count-selected-systems'),
  btnSelectAllSubjects: document.getElementById('btn-select-all-subjects'),
  btnClearAllSubjects: document.getElementById('btn-clear-all-subjects'),
  btnSelectAllSystems: document.getElementById('btn-select-all-systems'),
  btnClearAllSystems: document.getElementById('btn-clear-all-systems'),
  btnSubjectsSelectAll: document.getElementById('btn-subjects-select-all'),
  btnSubjectsClear: document.getElementById('btn-subjects-clear'),
  aiSubjectsChipsGrid: document.getElementById('ai-subjects-chips-grid'),
  btnSystemsSelectAll: document.getElementById('btn-systems-select-all'),
  btnSystemsClear: document.getElementById('btn-systems-clear'),
  aiSystemsChipsGrid: document.getElementById('ai-systems-chips-grid'),
  inputAiCustomTopic: document.getElementById('input-ai-custom-topic'),
  aiCountPresets: document.getElementById('ai-count-presets'),
  btnCountUnit: document.getElementById('btn-count-unit'),
  btnCountMock: document.getElementById('btn-count-mock'),
  aiCustomSizingElement: document.getElementById('ai-custom-sizing-element'),
  inputAiCustomCount: document.getElementById('input-ai-custom-count'),
  simulationSizingNotice: document.getElementById('simulation-sizing-notice'),
  simulationLockBadge: document.getElementById('simulation-lock-badge'),
  aiSizingRowPractice: document.getElementById('ai-sizing-row-practice'),
  aiSizingBreakdown: document.getElementById('ai-sizing-breakdown'),
  aiDifficultyGroup: document.getElementById('ai-difficulty-group'),
  aiStyleGroup: document.getElementById('ai-style-group'),
  btnToggleAiAdvanced: document.getElementById('btn-toggle-ai-advanced'),
  aiAdvancedIndicator: document.getElementById('ai-advanced-indicator'),
  aiAdvancedDrawer: document.getElementById('ai-advanced-drawer'),
  selectAiModel: document.getElementById('select-ai-model'),
  inputAiCustomModel: document.getElementById('input-ai-custom-model'),
  inputAiTemp: document.getElementById('input-ai-temp'),
  valAiTemp: document.getElementById('val-ai-temp'),
  aiGenerationProgress: document.getElementById('ai-generation-progress'),
  aiProgressStatus: document.getElementById('ai-progress-status'),
  aiProgressPercentage: document.getElementById('ai-progress-percentage'),
  aiProgressFill: document.getElementById('ai-progress-fill'),
  aiProgressBatch: document.getElementById('ai-progress-batch'),
  btnCancelAiGeneration: document.getElementById('btn-cancel-ai-generation'),
  btnAiCopyPrompt: document.getElementById('btn-ai-copy-prompt'),
  btnAiGenerate: document.getElementById('btn-ai-generate'),

  // Manual Upload Controls
  dropZone: document.getElementById('drop-zone'),
  fileInput: document.getElementById('json-file-input'),
  browseBtn: document.getElementById('browse-btn'),
  fileNameDisplay: document.getElementById('file-name-display'),
  jsonTextInput: document.getElementById('json-text-input'),
  validationAlert: document.getElementById('validation-alert'),
  validationMsg: document.getElementById('validation-msg'),
  loadSampleBtn: document.getElementById('load-sample-btn'),
  startExamBtn: document.getElementById('start-exam-btn'),

  // Exam Workspace Controls
  sectionsBar: document.getElementById('sections-bar'),
  examQNumber: document.getElementById('exam-q-number'),
  examQText: document.getElementById('exam-q-text'),
  examOptionsList: document.getElementById('exam-options-list'),
  btnBookmarkToggle: document.getElementById('btn-bookmark-toggle'),
  btnClearResponse: document.getElementById('btn-clear-response'),
  btnPrevQ: document.getElementById('btn-prev-q'),
  btnSaveNext: document.getElementById('btn-save-next'),
  btnSubmitSection: document.getElementById('btn-submit-section'),

  // Sidebar & Palette
  examProgressSidebar: document.getElementById('exam-progress-sidebar'),
  btnPaletteNavToggle: document.getElementById('btn-palette-nav-toggle'),
  btnSidebarClose: document.getElementById('btn-sidebar-close'),
  timerSecLabel: document.getElementById('timer-sec-label'),
  sectionClockDisplay: document.getElementById('section-clock-display'),
  countAnswered: document.getElementById('count-answered'),
  countLowConfidence: document.getElementById('count-low-confidence'),
  countNotAnswered: document.getElementById('count-not-answered'),
  countNotVisited: document.getElementById('count-not-visited'),
  examPaletteGrid: document.getElementById('exam-palette-grid'),

  // Review & Analytics KPIs
  kpiTotalScore: document.getElementById('kpi-total-score'),
  kpiMaxScore: document.getElementById('kpi-max-score'),
  kpiCorrectCount: document.getElementById('kpi-correct-count'),
  kpiCorrectScore: document.getElementById('kpi-correct-score'),
  kpiIncorrectCount: document.getElementById('kpi-incorrect-count'),
  kpiIncorrectScore: document.getElementById('kpi-incorrect-score'),
  kpiUnattemptedCount: document.getElementById('kpi-unattempted-count'),
  kpiUnattemptedRate: document.getElementById('kpi-unattempted-rate'),
  kpiAccuracyPct: document.getElementById('kpi-accuracy-pct'),
  kpiAttemptRate: document.getElementById('kpi-attempt-rate'),

  // Analytics Master & Tabs
  analyticsWorkspace: document.querySelector('.analytics-workspace'),
  analyticsMasterTabsNav: document.getElementById('analytics-master-tabs-nav'),
  tabQuestionReview: document.getElementById('tab-question-review'),
  tabAnalyticsMaster: document.getElementById('tab-analytics-master'),
  analyticsSubnavBar: document.getElementById('analytics-subnav-bar'),
  tabTriageMatrix: document.getElementById('tab-triage-matrix'),
  tabAnalyticsGeneric: document.getElementById('tab-analytics-generic'),
  tabHistory: document.getElementById('tab-history'),

  // Triage Matrix Elements
  countMastered: document.getElementById('count-mastered'),
  pctMastered: document.getElementById('pct-mastered'),
  countSilly: document.getElementById('count-silly'),
  pctSilly: document.getElementById('pct-silly'),
  countLucky: document.getElementById('count-lucky'),
  pctLucky: document.getElementById('pct-lucky'),
  countGaps: document.getElementById('count-gaps'),
  pctGaps: document.getElementById('pct-gaps'),
  matrixSubjectTable: document.getElementById('matrix-subject-table'),

  // Question Review Elements
  reviewQNum: document.getElementById('review-q-num'),
  reviewQStatusBadge: document.getElementById('review-q-status-badge'),
  reviewBookmarkIndicator: document.getElementById('review-bookmark-indicator'),
  btnReviewPrevQ: document.getElementById('btn-review-prev-q'),
  btnReviewNextQ: document.getElementById('btn-review-next-q'),
  btnCopyQuestion: document.getElementById('btn-copy-question'),
  reviewQText: document.getElementById('review-q-text'),
  reviewOptionsList: document.getElementById('review-options-list'),
  reviewExplanationText: document.getElementById('review-explanation-text'),
  reviewTagPills: document.getElementById('review-tag-pills'),

  // Generic Analytics
  genericTabTitle: document.getElementById('generic-tab-title'),
  genericTabDesc: document.getElementById('generic-tab-desc'),
  analyticsTable: document.getElementById('analytics-table'),

  // Filters & Mini Palette
  btnResetFilters: document.getElementById('btn-reset-filters'),
  filterMatrix: document.getElementById('filter-matrix'),
  filterResult: document.getElementById('filter-result'),
  filterConfidence: document.getElementById('filter-confidence'),
  filterBookmark: document.getElementById('filter-bookmark'),
  filterSection: document.getElementById('filter-section'),
  filterSubject: document.getElementById('filter-subject'),
  filterSystem: document.getElementById('filter-system'),
  filterDifficulty: document.getElementById('filter-difficulty'),
  filterFormat: document.getElementById('filter-format'),
  filteredCountDisplay: document.getElementById('filtered-count-display'),
  reviewMiniPalette: document.getElementById('review-mini-palette'),
  btnCopyAllFiltered: document.getElementById('btn-copy-all-filtered'),

  // Modal
  modalContainer: document.getElementById('modal-container'),
  modalTitle: document.getElementById('modal-title'),
  modalBody: document.getElementById('modal-body'),
  modalBtnCancel: document.getElementById('modal-btn-cancel'),
  modalBtnConfirm: document.getElementById('modal-btn-confirm'),

  // Test Ready Modal
  modalTestReady: document.getElementById('modal-test-ready'),
  testReadyTitle: document.getElementById('test-ready-title'),
  readyStatQuestions: document.getElementById('ready-stat-questions'),
  readyStatSections: document.getElementById('ready-stat-sections'),
  readyStatDuration: document.getElementById('ready-stat-duration'),
  readyStatScheme: document.getElementById('ready-stat-scheme'),
  testReadySubjects: document.getElementById('test-ready-subjects'),
  btnTestReadyInspect: document.getElementById('btn-test-ready-inspect'),
  btnTestReadyDownload: document.getElementById('btn-test-ready-download'),
  btnTestReadyStart: document.getElementById('btn-test-ready-start'),

  // Copy AI Prompt Modal
  modalCopyPrompt: document.getElementById('modal-copy-prompt'),
  copyPromptChars: document.getElementById('copy-prompt-chars'),
  copyPromptTokens: document.getElementById('copy-prompt-tokens'),
  copyPromptTextarea: document.getElementById('copy-prompt-textarea'),
  btnCopyPromptClose: document.getElementById('btn-copy-prompt-close'),
  btnCopyPromptAction: document.getElementById('btn-copy-prompt-action'),

  // Toast
  toastNotification: document.getElementById('toast-notification'),

  // Past Attempt & History
  pastAttemptBanner: document.getElementById('past-attempt-banner'),
  pastAttemptLabel: document.getElementById('past-attempt-label'),
  sampleTestBanner: document.getElementById('sample-test-banner'),
  sampleTestBannerLabel: document.getElementById('sample-test-banner-label'),
  btnReturnLatest: document.getElementById('btn-return-latest'),
  historyComparisonTable: document.getElementById('history-comparison-table'),
  historyFileInput: document.getElementById('history-file-input'),
  btnImportHistory: document.getElementById('btn-import-history'),
  btnExportHistory: document.getElementById('btn-export-history'),
  btnClearHistory: document.getElementById('btn-clear-history'),
  historyFilterExam: document.getElementById('history-filter-exam'),
  btnSortHistoryDate: document.getElementById('btn-sort-history-date'),
  historySortArrow: document.getElementById('history-sort-arrow'),
  histAggTests: document.getElementById('hist-agg-tests'),
  histAggBreakdown: document.getElementById('hist-agg-breakdown'),
  histAggScoreAcc: document.getElementById('hist-agg-score-acc'),
  histAggAvgSub: document.getElementById('hist-agg-avg-sub'),
  histAggCorrect: document.getElementById('hist-agg-correct'),
  histAggCorrectSub: document.getElementById('hist-agg-correct-sub'),
  histAggIncorrect: document.getElementById('hist-agg-incorrect'),
  histAggIncorrectSub: document.getElementById('hist-agg-incorrect-sub')
};

// ==========================================================================
// 4. Initializer & Theme Manager
// ==========================================================================
async function initApp() {
  isAppInitializing = true;
  try {
    // Fast-path immediate view activation to prevent UI layout flash
    const rawExamEarly = localStorage.getItem('triage_exam_session');
    let savedStateEarly = null;
    try {
      const rawStateEarly = localStorage.getItem('triage_app_state');
      if (rawStateEarly) savedStateEarly = JSON.parse(rawStateEarly);
    } catch (e) {}

    const hash = (typeof window !== 'undefined' && window.location) ? window.location.hash : '';

    if (rawExamEarly) {
      switchView('exam');
    } else if (hash === '#setup' || (savedStateEarly && savedStateEarly.view === 'setup')) {
      switchView('setup');
    } else if (hash === '#review' || (savedStateEarly && savedStateEarly.view === 'review')) {
      switchView('review');
    } else {
      switchView('home');
    }

    applyTheme(AppState.theme);
    attachEventListeners();
    updateExamModeUI();
    initAiGeneratorUI();
    renderHeaderNavActions();
    await loadHistoryFromDB();
    checkPersistedState();
  } catch (err) {
    console.error('Error during initApp:', err);
  } finally {
    isAppInitializing = false;
  }

  if (AppState.view === 'exam') {
    persistExamState();
  } else {
    persistAppState();
  }

  registerServiceWorker();
}

function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          console.log('Triage PWA ServiceWorker active:', reg.scope);
        })
        .catch(err => {
          console.warn('ServiceWorker registration error:', err);
        });
    });
  }
}

function applyTheme(theme) {
  AppState.theme = theme;
  DOM.html.setAttribute('data-theme', theme);
  localStorage.setItem('triage_theme', theme);
  DOM.themeLabel.textContent = theme === 'dark' ? 'LIGHT' : 'DARK';

  const themeHex = theme === 'dark' ? '#0a0a0a' : '#ffffff';
  document.querySelectorAll('meta[name="theme-color"]').forEach(m => {
    m.setAttribute('content', themeHex);
  });
}

function toggleTheme() {
  applyTheme(AppState.theme === 'dark' ? 'light' : 'dark');
}

function updateStepHeaderBadges() {
  // Step 1: Mode
  if (DOM.badgeStepMode) {
    DOM.badgeStepMode.textContent = AppState.sessionMode === 'practice' ? 'Practice Mode' : 'Exam Mode';
  }

  // Step 2: Type
  if (DOM.badgeStepType) {
    DOM.badgeStepType.textContent = AppState.examMode === 'neetpg' ? 'NEET-PG (+4 / -1)' : 'INI-CET (+1 / -0.333)';
  }

  // Step 3: Length & Partitioning
  if (DOM.badgeStepLength) {
    const isPractice = AppState.sessionMode === 'practice';
    const isNeet = AppState.examMode === 'neetpg';
    const count = AppState.aiQuestionCount || 10;
    if (isPractice) {
      DOM.badgeStepLength.textContent = `${count} Qs (Untimed Drill)`;
    } else {
      const targetSec = isNeet ? 36 : 50;
      const numSec = Math.max(1, Math.ceil(count / targetSec));
      DOM.badgeStepLength.textContent = `${count} Qs (${numSec} ${isNeet ? 'Sec' : 'Blk'})`;
    }
  }

  // Step 4: Syllabus
  if (DOM.badgeStepSyllabus) {
    if (AppState.aiScope === 'grand') {
      DOM.badgeStepSyllabus.textContent = 'Full Syllabus';
    } else {
      const subjCount = AppState.aiSelectedSubjects ? AppState.aiSelectedSubjects.length : 0;
      const sysCount = AppState.aiSelectedSystems ? AppState.aiSelectedSystems.length : 0;
      if (subjCount === 0 && sysCount === 0) {
        DOM.badgeStepSyllabus.textContent = 'Custom Syllabus';
      } else {
        DOM.badgeStepSyllabus.textContent = `${subjCount} Subj, ${sysCount} Sys`;
      }
    }
  }

  // Step 5: Difficulty & Format
  if (DOM.badgeStepFormat) {
    const diffMap = { balanced: 'Balanced', easy: 'Easy', medium: 'Medium', hard: 'Hard' };
    const styleMap = { mixed: 'Mixed', oneliner: 'One-Liners', conceptual: 'Conceptual', vignette: 'Vignettes' };
    const diff = diffMap[AppState.aiDifficulty] || 'Balanced';
    const style = styleMap[AppState.aiStyle] || 'Mixed';
    DOM.badgeStepFormat.textContent = `${diff} • ${style}`;
  }

  // Step 6: AI Settings
  if (DOM.badgeStepAi) {
    const savedKey = (typeof localStorage !== 'undefined' && localStorage.getItem('triage_gemini_api_key')) || (DOM.inputGeminiApiKey ? DOM.inputGeminiApiKey.value.trim() : '');
    const isKeySet = Boolean(savedKey);
    DOM.badgeStepAi.textContent = isKeySet ? 'Configured' : 'Key Required';
  }
}

function toggleSetupStep(stepNum, forceOpen) {
  const stepMap = {
    1: 'step-card-mode',
    2: 'step-card-type',
    3: 'step-card-length',
    4: 'step-card-syllabus',
    5: 'step-card-format',
    6: 'step-card-ai'
  };
  const targetId = stepMap[stepNum];
  const targetCard = document.getElementById(targetId);
  if (!targetCard) return;

  if (forceOpen === true) {
    document.querySelectorAll('.setup-step-card').forEach(c => {
      c.classList.toggle('active', c === targetCard);
    });
    if (typeof targetCard.scrollIntoView === 'function') {
      try {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } catch (e) {}
    }
  } else if (forceOpen === false) {
    targetCard.classList.remove('active');
  } else {
    targetCard.classList.toggle('active');
  }
  updateStepHeaderBadges();
}

function setSessionMode(mode, autoAdvance = true) {
  AppState.sessionMode = mode; // 'practice' | 'simulation'
  if (DOM.btnModePractice) {
    DOM.btnModePractice.classList.toggle('active', mode === 'practice');
  }
  if (DOM.btnModeSimulation) {
    DOM.btnModeSimulation.classList.toggle('active', mode === 'simulation');
  }

  const isSim = mode === 'simulation';
  if (DOM.modeExplanationPractice) {
    DOM.modeExplanationPractice.classList.toggle('hidden', isSim);
  }
  if (DOM.modeExplanationExam) {
    DOM.modeExplanationExam.classList.toggle('hidden', !isSim);
  }
  if (DOM.simulationSizingNotice) {
    DOM.simulationSizingNotice.classList.toggle('hidden', !isSim);
  }
  if (DOM.aiSizingRowPractice) {
    DOM.aiSizingRowPractice.classList.remove('hidden');
  }

  if (DOM.aiCountPresets) {
    const activePreset = DOM.aiCountPresets.querySelector('.btn-count-preset.active');
    if (activePreset) {
      AppState.aiQuestionCount = parseInt(activePreset.dataset.count, 10) || 10;
    } else if (DOM.inputAiCustomCount) {
      AppState.aiQuestionCount = parseInt(DOM.inputAiCustomCount.value, 10) || 10;
    }
  }

  updateExamModeUI();
  if (typeof updateAiSizingBreakdown === 'function') {
    updateAiSizingBreakdown();
  }
  if (typeof updateAiConfigSummary === 'function') {
    updateAiConfigSummary();
  }
  updateStepHeaderBadges();
  persistAppState();
}

function setExamMode(mode) {
  AppState.examMode = mode;
  // If the active preset was the unit (36/50) or mock (180/200), update to match the new exam mode
  if (AppState.aiQuestionCount === 36 && mode === 'inicet') {
    AppState.aiQuestionCount = 50;
  } else if (AppState.aiQuestionCount === 50 && mode === 'neetpg') {
    AppState.aiQuestionCount = 36;
  } else if (AppState.aiQuestionCount === 180 && mode === 'inicet') {
    AppState.aiQuestionCount = 200;
  } else if (AppState.aiQuestionCount === 200 && mode === 'neetpg') {
    AppState.aiQuestionCount = 180;
  }

  updateExamModeUI();
  updateStepHeaderBadges();
  persistAppState();
}

function updateExamModeUI() {
  const isNeet = AppState.examMode === 'neetpg';
  DOM.modeBtnNeet.classList.toggle('active', isNeet);
  DOM.modeBtnIni.classList.toggle('active', !isNeet);
  if (DOM.loadSampleBtn) {
    DOM.loadSampleBtn.textContent = isNeet ? 'Load NEET-PG Sample' : 'Load INI-CET Sample';
  }

  if (DOM.inputTestName) {
    const defaultPlaceholder = isNeet ? 'NEET-PG Mock Test' : 'INI-CET Mock Test';
    DOM.inputTestName.placeholder = defaultPlaceholder;
    if (DOM.inputTestName.value === 'NEET-PG Mock Test' || DOM.inputTestName.value === 'INI-CET Mock Test') {
      DOM.inputTestName.value = defaultPlaceholder;
      AppState.customTestName = defaultPlaceholder;
    }
  }

  if (DOM.btnCountUnit) {
    DOM.btnCountUnit.dataset.count = isNeet ? '36' : '50';
    DOM.btnCountUnit.textContent = isNeet ? '36 Qs (Section)' : '50 Qs (Block)';
  }
  if (DOM.btnCountMock) {
    DOM.btnCountMock.dataset.count = isNeet ? '180' : '200';
    DOM.btnCountMock.textContent = isNeet ? '180 Qs (Full Test)' : '200 Qs (Full Test)';
  }
  if (DOM.simulationLockBadge) {
    DOM.simulationLockBadge.textContent = isNeet
      ? 'Official NEET-PG Format: 5 Sections × 36 Qs (42 min / section • +4 / -1)'
      : 'Official INI-CET Format: 4 Blocks × 50 Qs (45 min / block • +1 / -0.333)';
  }

  // Deduplicated Exam Format Details: shows marking scheme and pacing without repeating mode description
  if (DOM.examFormatDetails) {
    if (isNeet) {
      DOM.examFormatDetails.innerHTML = `<strong>NEET-PG:</strong> +4 / -1 Marking Scheme • 63s/Question Standard Time-Budget`;
    } else {
      DOM.examFormatDetails.innerHTML = `<strong>INI-CET:</strong> +1 / -0.333 Marking Scheme • 54s/Question Standard Time-Budget`;
    }
  }

  if (DOM.aiCountPresets) {
    const presetBtns = DOM.aiCountPresets.querySelectorAll('.btn-count-preset');
    let matchedPreset = false;
    presetBtns.forEach(btn => {
      const isMatch = parseInt(btn.dataset.count, 10) === AppState.aiQuestionCount;
      btn.classList.toggle('active', isMatch);
      if (isMatch) matchedPreset = true;
    });
    if (DOM.aiCustomSizingElement) {
      DOM.aiCustomSizingElement.classList.toggle('active', !matchedPreset);
    }
  }

  if (DOM.samplePanelTitle) {
    DOM.samplePanelTitle.textContent = isNeet ? 'NEET-PG Practice Mock Test' : 'INI-CET Practice Mock Test';
  }
  if (DOM.sampleTagMarking) {
    DOM.sampleTagMarking.textContent = isNeet ? '+4 / -1 Marking' : '+1 / -0.333 Marking';
  }

  if (typeof updateAiSizingBreakdown === 'function') {
    updateAiSizingBreakdown();
  }
  if (typeof updateAiConfigSummary === 'function') {
    updateAiConfigSummary();
  }

  // Clear or revalidate input
  if (DOM.jsonTextInput.value.trim()) {
    validateJsonContent(DOM.jsonTextInput.value);
  } else {
    DOM.startExamBtn.disabled = !AppState.examData;
  }
}

// ==========================================================================
// 5. Event Listeners
// ==========================================================================
function attachEventListeners() {
  // Theme Toggle
  DOM.themeToggleBtn.addEventListener('click', toggleTheme);

  // Session Mode Selector (Targeted Practice vs Full Simulation)
  if (DOM.btnModePractice) {
    DOM.btnModePractice.addEventListener('click', () => setSessionMode('practice'));
  }
  if (DOM.btnModeSimulation) {
    DOM.btnModeSimulation.addEventListener('click', () => setSessionMode('simulation'));
  }

  // Exam Mode Selector
  DOM.modeBtnNeet.addEventListener('click', () => setExamMode('neetpg'));
  DOM.modeBtnIni.addEventListener('click', () => setExamMode('inicet'));
  if (DOM.inputTestName) {
    DOM.inputTestName.addEventListener('input', () => {
      AppState.customTestName = DOM.inputTestName.value.trim();
      persistAppState();
    });
  }
  if (DOM.btnResetTestName) {
    DOM.btnResetTestName.addEventListener('click', () => {
      if (DOM.inputTestName) DOM.inputTestName.value = '';
      AppState.customTestName = '';
      persistAppState();
    });
  }

  // File Upload & Drag-Drop
  DOM.browseBtn.addEventListener('click', () => DOM.fileInput.click());
  DOM.fileInput.addEventListener('change', handleFileSelect);
  DOM.dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    DOM.dropZone.classList.add('dragover');
  });
  DOM.dropZone.addEventListener('dragleave', () => DOM.dropZone.classList.remove('dragover'));
  DOM.dropZone.addEventListener('drop', handleFileDrop);

  if (DOM.jsonTextInput) {
    DOM.jsonTextInput.addEventListener('input', () => validateJsonContent(DOM.jsonTextInput.value));
  }

  if (DOM.loadSampleBtn) {
    DOM.loadSampleBtn.addEventListener('click', loadDefaultSample);
  }
  if (DOM.startExamBtn) {
    DOM.startExamBtn.addEventListener('click', () => {
      if (AppState.examData) {
        openStartTestDialog(AppState.examData);
      }
    });
  }

  // Landing / Home Actions
  if (DOM.btnLandingSample) {
    DOM.btnLandingSample.addEventListener('click', () => {
      if (DOM.modalSampleConfirm) {
        DOM.modalSampleConfirm.classList.remove('hidden');
      }
    });
  }
  if (DOM.btnLandingSetup) {
    DOM.btnLandingSetup.addEventListener('click', () => switchView('setup'));
  }
  if (DOM.btnSetupBackHome) {
    DOM.btnSetupBackHome.addEventListener('click', () => switchView('home'));
  }

  // Sample Confirmation Modal Actions
  if (DOM.btnSampleCancel) {
    DOM.btnSampleCancel.addEventListener('click', () => {
      if (DOM.modalSampleConfirm) {
        DOM.modalSampleConfirm.classList.add('hidden');
      }
    });
  }
  if (DOM.btnSampleConfirm) {
    DOM.btnSampleConfirm.addEventListener('click', () => {
      if (DOM.modalSampleConfirm) {
        DOM.modalSampleConfirm.classList.add('hidden');
      }
      startSampleTestDirect();
    });
  }

  // Start Test Dialog Modal Actions
  if (DOM.btnDialogResetName) {
    DOM.btnDialogResetName.addEventListener('click', () => {
      if (DOM.inputDialogTestName) {
        const defaultName = AppState.examMode === 'inicet' ? 'INI-CET CBT Mock Test' : 'NEET-PG CBT Mock Test';
        DOM.inputDialogTestName.value = defaultName;
      }
    });
  }
  if (DOM.btnDialogGotoSetup) {
    DOM.btnDialogGotoSetup.addEventListener('click', () => {
      closeStartTestDialog();
      switchView('setup');
    });
  }
  if (DOM.btnDialogStartTest) {
    DOM.btnDialogStartTest.addEventListener('click', () => {
      if (!AppState.pendingExamPackage) return;
      closeStartTestDialog();
      AppState.isSampleTest = false;
      const customTitle = DOM.inputDialogTestName ? DOM.inputDialogTestName.value.trim() : '';
      if (customTitle) {
        AppState.customTestName = customTitle;
        AppState.pendingExamPackage.examTitle = customTitle;
      }
      AppState.examData = AppState.pendingExamPackage;
      startExamSession();
    });
  }

  // Setup Mode Switcher
  if (DOM.tabSetupAi) {
    DOM.tabSetupAi.addEventListener('click', () => switchSetupMode('ai'));
  }
  if (DOM.tabSetupSample) {
    DOM.tabSetupSample.addEventListener('click', () => switchSetupMode('sample'));
  }
  if (DOM.tabSetupManual) {
    DOM.tabSetupManual.addEventListener('click', () => switchSetupMode('manual'));
  }

  // 1-Click Instant Sample Test Launcher
  if (DOM.btnStartSampleDirect) {
    DOM.btnStartSampleDirect.addEventListener('click', startSampleDirect);
  }

  // AI Generator - Compact API Key Strip & Editor
  if (DOM.btnChangeApiKey) {
    DOM.btnChangeApiKey.addEventListener('click', () => {
      if (DOM.keyStatusDisplay) DOM.keyStatusDisplay.classList.add('hidden');
      if (DOM.keyEditorRow) {
        DOM.keyEditorRow.classList.remove('hidden');
        if (DOM.inputGeminiApiKey) DOM.inputGeminiApiKey.focus();
      }
    });
  }
  if (DOM.btnCancelKeyEdit) {
    DOM.btnCancelKeyEdit.addEventListener('click', () => {
      const savedKey = localStorage.getItem('triage_gemini_api_key') || '';
      if (savedKey) {
        if (DOM.keyEditorRow) DOM.keyEditorRow.classList.add('hidden');
        if (DOM.keyStatusDisplay) DOM.keyStatusDisplay.classList.remove('hidden');
        if (DOM.inputGeminiApiKey) DOM.inputGeminiApiKey.value = savedKey;
      }
    });
  }

  // AI Generator - Topic & Syllabus Scope Selection
  if (DOM.selectAiScope) {
    DOM.selectAiScope.addEventListener('change', () => {
      setAiScope(DOM.selectAiScope.value);
      updateStepHeaderBadges();
    });
  }
  if (DOM.selectAiSubject) {
    DOM.selectAiSubject.addEventListener('change', () => {
      updateAiConfigSummary();
    });
  }
  if (DOM.selectAiSystem) {
    DOM.selectAiSystem.addEventListener('change', () => {
      updateAiConfigSummary();
    });
  }
  if (DOM.btnSelectAllSubjects) {
    DOM.btnSelectAllSubjects.addEventListener('click', selectAllSubjects);
  }
  if (DOM.btnClearAllSubjects) {
    DOM.btnClearAllSubjects.addEventListener('click', clearAllSubjects);
  }
  if (DOM.btnSelectAllSystems) {
    DOM.btnSelectAllSystems.addEventListener('click', selectAllSystems);
  }
  if (DOM.btnClearAllSystems) {
    DOM.btnClearAllSystems.addEventListener('click', clearAllSystems);
  }

  // AI Generator - Wizard Subtabs (Legacy Support)
  if (DOM.aiSubtabBar) {
    DOM.aiSubtabBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-ai-subtab');
      if (!btn || !btn.dataset.step) return;
      switchAiSubtab(btn.dataset.step);
    });
  }

  // AI Generator - Step Navigation Footer Buttons (Legacy Support)
  if (DOM.btnStepToFormat) {
    DOM.btnStepToFormat.addEventListener('click', () => switchAiSubtab('format'));
  }
  if (DOM.btnStepBackToScope) {
    DOM.btnStepBackToScope.addEventListener('click', () => switchAiSubtab('scope'));
  }
  if (DOM.btnStepToGenerate) {
    DOM.btnStepToGenerate.addEventListener('click', () => switchAiSubtab('generate'));
  }
  if (DOM.btnStepBackToFormat) {
    DOM.btnStepBackToFormat.addEventListener('click', () => switchAiSubtab('format'));
  }

  // AI Generator - API Key Management
  if (DOM.btnSaveApiKey) {
    DOM.btnSaveApiKey.addEventListener('click', saveApiKey);
  }
  if (DOM.btnClearApiKey) {
    DOM.btnClearApiKey.addEventListener('click', clearApiKey);
  }
  if (DOM.btnToggleKeyMask) {
    DOM.btnToggleKeyMask.addEventListener('click', toggleApiKeyMask);
  }

  // AI Generator - Topic Scope (Legacy Chip Buttons)
  if (DOM.btnScopeGrand) {
    DOM.btnScopeGrand.addEventListener('click', () => setAiScope('grand'));
  }
  if (DOM.btnScopeCustom) {
    DOM.btnScopeCustom.addEventListener('click', () => setAiScope('custom'));
  }
  if (DOM.btnSubjectsSelectAll) {
    DOM.btnSubjectsSelectAll.addEventListener('click', selectAllSubjects);
  }
  if (DOM.btnSubjectsClear) {
    DOM.btnSubjectsClear.addEventListener('click', clearAllSubjects);
  }
  if (DOM.btnSystemsSelectAll) {
    DOM.btnSystemsSelectAll.addEventListener('click', selectAllSystems);
  }
  if (DOM.btnSystemsClear) {
    DOM.btnSystemsClear.addEventListener('click', clearAllSystems);
  }

  // AI Generator - Question Sizing Presets (10, 25, 36/50, 180/200)
  if (DOM.aiCountPresets) {
    DOM.aiCountPresets.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-count-preset');
      if (!btn) return;
      const count = parseInt(btn.dataset.count, 10);
      setAiQuestionCount(count);
      updateStepHeaderBadges();
    });
  }

  // AI Generator - Separate Custom Question Size Element
  if (DOM.aiCustomSizingElement) {
    DOM.aiCustomSizingElement.addEventListener('click', (e) => {
      if (e.target !== DOM.inputAiCustomCount && DOM.inputAiCustomCount) {
        DOM.inputAiCustomCount.focus();
      }
    });
  }
  if (DOM.inputAiCustomCount) {
    const handleCustomInput = () => {
      if (DOM.aiCountPresets) {
        DOM.aiCountPresets.querySelectorAll('.btn-count-preset').forEach(b => b.classList.remove('active'));
      }
      if (DOM.aiCustomSizingElement) {
        DOM.aiCustomSizingElement.classList.add('active');
      }
      const val = parseInt(DOM.inputAiCustomCount.value, 10);
      if (!isNaN(val) && val >= 1 && val <= 200) {
        setAiQuestionCount(val, false);
        updateStepHeaderBadges();
      }
    };

    DOM.inputAiCustomCount.addEventListener('focus', handleCustomInput);
    DOM.inputAiCustomCount.addEventListener('input', handleCustomInput);
  }

  // AI Generator - Difficulty & Style (Dropdowns and Legacy Segmented Groups)
  if (DOM.selectAiDifficulty) {
    DOM.selectAiDifficulty.addEventListener('change', () => {
      AppState.aiDifficulty = DOM.selectAiDifficulty.value;
      updateAiConfigSummary();
      updateStepHeaderBadges();
    });
  }
  if (DOM.selectAiStyle) {
    DOM.selectAiStyle.addEventListener('change', () => {
      AppState.aiStyle = DOM.selectAiStyle.value;
      updateStepHeaderBadges();
    });
  }

  // Setup Step Accordion Headers (Collapse / Expand on click)
  document.querySelectorAll('.setup-step-header').forEach(header => {
    header.addEventListener('click', (e) => {
      e.preventDefault();
      const card = header.closest('.setup-step-card');
      if (card) {
        const isOpen = card.classList.contains('active');
        document.querySelectorAll('.setup-step-card').forEach(c => c.classList.remove('active'));
        if (!isOpen) {
          card.classList.add('active');
        }
        updateStepHeaderBadges();
      }
    });
  });
  if (DOM.aiDifficultyGroup) {
    DOM.aiDifficultyGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-segmented');
      if (!btn) return;
      setAiDifficulty(btn.dataset.value);
    });
  }
  if (DOM.aiStyleGroup) {
    DOM.aiStyleGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-segmented');
      if (!btn) return;
      setAiStyle(btn.dataset.value);
    });
  }

  // AI Generator - Advanced Settings Drawer
  if (DOM.btnToggleAiAdvanced) {
    DOM.btnToggleAiAdvanced.addEventListener('click', toggleAiAdvancedDrawer);
  }
  if (DOM.selectAiModel) {
    DOM.selectAiModel.addEventListener('change', () => {
      const isCustom = DOM.selectAiModel.value === 'custom';
      if (DOM.inputAiCustomModel) {
        DOM.inputAiCustomModel.classList.toggle('hidden', !isCustom);
        const hint = document.getElementById('ai-custom-model-hint');
        if (hint) hint.style.display = isCustom ? 'block' : 'none';
        if (isCustom) {
          DOM.inputAiCustomModel.focus();
          AppState.aiModel = DOM.inputAiCustomModel.value.trim() || 'gemini-3.5-flash';
        } else {
          AppState.aiModel = DOM.selectAiModel.value;
        }
      } else {
        AppState.aiModel = DOM.selectAiModel.value;
      }
      localStorage.setItem('triage_ai_model', AppState.aiModel);
      updateAiConfigSummary();
    });
  }
  if (DOM.inputAiCustomModel) {
    DOM.inputAiCustomModel.addEventListener('input', () => {
      const customVal = DOM.inputAiCustomModel.value.trim();
      AppState.aiModel = customVal || 'gemini-3.5-flash';
      localStorage.setItem('triage_ai_model', AppState.aiModel);
      updateAiConfigSummary();
    });
  }
  if (DOM.inputAiCustomTopic) {
    DOM.inputAiCustomTopic.addEventListener('input', () => {
      updateAiConfigSummary();
      persistAppState();
    });
  }
  if (DOM.inputAiTemp) {
    DOM.inputAiTemp.addEventListener('input', () => {
      DOM.valAiTemp.textContent = DOM.inputAiTemp.value;
      AppState.aiTemperature = parseFloat(DOM.inputAiTemp.value);
      localStorage.setItem('triage_ai_temp', DOM.inputAiTemp.value);
    });
  }

  // AI Generator - Actions & Cancellation
  if (DOM.btnAiGenerate) {
    DOM.btnAiGenerate.addEventListener('click', generateTestWithGemini);
  }
  if (DOM.btnCancelAiGeneration) {
    DOM.btnCancelAiGeneration.addEventListener('click', cancelAiGeneration);
  }
  if (DOM.btnAiCopyPrompt) {
    DOM.btnAiCopyPrompt.addEventListener('click', openCopyPromptModal);
  }

  // Copy AI Prompt Modal
  if (DOM.btnCopyPromptClose) {
    DOM.btnCopyPromptClose.addEventListener('click', closeCopyPromptModal);
  }
  if (DOM.btnCopyPromptAction) {
    DOM.btnCopyPromptAction.addEventListener('click', copyPromptToClipboard);
  }

  // Test Ready Modal
  if (DOM.btnTestReadyStart) {
    DOM.btnTestReadyStart.addEventListener('click', () => {
      closeTestReadyModal();
      if (AppState.examData) {
        startExamSession();
      }
    });
  }
  if (DOM.btnTestReadyDownload) {
    DOM.btnTestReadyDownload.addEventListener('click', downloadGeneratedTestJson);
  }
  if (DOM.btnTestReadyInspect) {
    DOM.btnTestReadyInspect.addEventListener('click', () => {
      closeTestReadyModal();
      switchSetupMode('manual');
      if (AppState.examData) {
        DOM.jsonTextInput.value = JSON.stringify(AppState.examData, null, 2);
        validateJsonContent(DOM.jsonTextInput.value);
      }
    });
  }

  // CBT Exam Actions
  DOM.btnSaveNext.addEventListener('click', handleSaveAndNext);
  if (DOM.btnBookmarkToggle) {
    DOM.btnBookmarkToggle.addEventListener('click', toggleBookmark);
  }
  DOM.btnClearResponse.addEventListener('click', handleClearResponse);
  DOM.btnPrevQ.addEventListener('click', handlePreviousQuestion);
  DOM.btnSubmitSection.addEventListener('click', () => confirmSubmitSection(false));

  // Palette Mobile Drawer
  DOM.btnPaletteNavToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.examProgressSidebar.classList.toggle('drawer-open');
    updatePaletteToggleState();
  });
  DOM.btnSidebarClose.addEventListener('click', () => {
    DOM.examProgressSidebar.classList.remove('drawer-open');
    updatePaletteToggleState();
  });
  document.addEventListener('click', (e) => {
    if (DOM.examProgressSidebar.classList.contains('drawer-open')) {
      if (!DOM.examProgressSidebar.contains(e.target) && !DOM.btnPaletteNavToggle.contains(e.target)) {
        DOM.examProgressSidebar.classList.remove('drawer-open');
        updatePaletteToggleState();
      }
    }
  });

  // Analytics & Review Actions
  if (DOM.analyticsMasterTabsNav) {
    DOM.analyticsMasterTabsNav.addEventListener('click', handleMasterTabClick);
  }
  if (DOM.analyticsSubnavBar) {
    DOM.analyticsSubnavBar.addEventListener('click', handleAnalyticsSubnavClick);
  }
  DOM.btnReviewPrevQ.addEventListener('click', handleReviewPrevQuestion);
  DOM.btnReviewNextQ.addEventListener('click', handleReviewNextQuestion);
  DOM.btnCopyQuestion.addEventListener('click', copyActiveReviewQuestion);
  DOM.btnCopyAllFiltered.addEventListener('click', copyAllFilteredQuestions);
  DOM.btnResetFilters.addEventListener('click', resetReviewFilters);

  // Filter Dropdowns
  DOM.filterMatrix.addEventListener('change', applyFiltersFromDropdowns);
  DOM.filterResult.addEventListener('change', applyFiltersFromDropdowns);
  DOM.filterConfidence.addEventListener('change', applyFiltersFromDropdowns);
  if (DOM.filterBookmark) {
    DOM.filterBookmark.addEventListener('change', applyFiltersFromDropdowns);
  }
  DOM.filterSection.addEventListener('change', applyFiltersFromDropdowns);
  DOM.filterSubject.addEventListener('change', applyFiltersFromDropdowns);
  DOM.filterSystem.addEventListener('change', applyFiltersFromDropdowns);
  DOM.filterDifficulty.addEventListener('change', applyFiltersFromDropdowns);
  if (DOM.filterFormat) DOM.filterFormat.addEventListener('change', applyFiltersFromDropdowns);

  // Matrix Card Filter Buttons
  document.querySelectorAll('.matrix-card .matrix-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.matrix-card');
      const quadrant = card.getAttribute('data-quadrant');
      filterReviewByQuadrant(quadrant);
    });
  });

  // State persistence on reload / unload
  window.addEventListener('beforeunload', () => {
    persistAppState();
    if (AppState.view === 'exam') persistExamState();
  });
  window.addEventListener('pagehide', () => {
    persistAppState();
    if (AppState.view === 'exam') persistExamState();
  });

  // Global Keyboard Navigation
  window.addEventListener('keydown', handleGlobalKeyDown);

  // URL Hash synchronization on browser Back / Forward
  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash;
    if (newHash === '#setup' || newHash === '#home') {
      if (AppState.view === 'exam') {
        confirmExitTest(() => {
          if (window.location.hash !== '#exam' && typeof history !== 'undefined' && history.replaceState) {
            history.replaceState(null, '', '#exam');
          }
        });
      } else if (AppState.view === 'review') {
        handleNewTest();
      }
    } else if (newHash === '#review') {
      if (AppState.view !== 'review' && (AppState.examData || (AppState.sessionHistory && AppState.sessionHistory.length > 0))) {
        switchView('review');
      }
    } else if (newHash === '#exam') {
      if (AppState.view !== 'exam' && AppState.examData && AppState.examData.sections) {
        switchView('exam');
      }
    }
  });

  // History & Past Attempt Actions
  if (DOM.btnSortHistoryDate) {
    DOM.btnSortHistoryDate.addEventListener('click', toggleHistorySortOrder);
  }
  if (DOM.historyFilterExam) {
    DOM.historyFilterExam.addEventListener('change', handleHistoryFilterChange);
  }
  DOM.btnReturnLatest.addEventListener('click', returnToLatestTest);
  DOM.btnExportHistory.addEventListener('click', exportHistoryJson);
  DOM.btnImportHistory.addEventListener('click', () => DOM.historyFileInput.click());
  DOM.historyFileInput.addEventListener('change', handleHistoryFileSelect);
  if (DOM.btnClearHistory) {
    DOM.btnClearHistory.addEventListener('click', confirmClearAllHistory);
  }

  // Prevent iOS / iPadOS Safari gesture zoom (pinch zoom)
  document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
  }, { passive: false });
  document.addEventListener('gesturechange', (e) => {
    e.preventDefault();
  }, { passive: false });
  document.addEventListener('gestureend', (e) => {
    e.preventDefault();
  }, { passive: false });

  // Prevent double-tap to zoom on mobile & iPad PWA
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      if (e.target && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
      }
    }
    lastTouchEnd = now;
  }, { passive: false });
}

// ==========================================================================
// 6. Strict JSON Validation Engine (MBBS Subjects Compliance)
// ==========================================================================
function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) readFile(file);
}

function handleFileDrop(e) {
  e.preventDefault();
  DOM.dropZone.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file && file.name.endsWith('.json')) readFile(file);
}

function readFile(file) {
  DOM.fileNameDisplay.textContent = file.name;
  const reader = new FileReader();
  reader.onload = (event) => {
    DOM.jsonTextInput.value = event.target.result;
    validateJsonContent(event.target.result);
  };
  reader.readAsText(file);
}

function parseJsonFlexible(rawText) {
  if (!rawText || typeof rawText !== 'string') {
    throw new Error("No JSON content provided.");
  }
  let str = rawText.trim();

  // Normalize smart/curly quotes
  str = str.replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]/g, '"').replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]/g, "'");

  // 1. Direct parse attempt
  try {
    return JSON.parse(str);
  } catch (e) {
    // Continue
  }

  // 2. Strip markdown code block fences (```json ... ``` or ``` ... ```)
  let stripped = str.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  try {
    return JSON.parse(stripped);
  } catch (e) {
    // Continue
  }

  // 3. Strip trailing commas before closing braces/brackets
  let noTrailingCommas = stripped.replace(/,\s*([\]}])/g, '$1');
  try {
    return JSON.parse(noTrailingCommas);
  } catch (e) {
    // Continue
  }

  // 4. Extract outermost JSON object { ... } or array [ ... ]
  const firstBrace = noTrailingCommas.indexOf('{');
  const firstBracket = noTrailingCommas.indexOf('[');
  let startIdx = -1;
  let endIdx = -1;

  if (firstBrace !== -1 && (firstBracket === -1 || firstBrace < firstBracket)) {
    startIdx = firstBrace;
    endIdx = noTrailingCommas.lastIndexOf('}');
  } else if (firstBracket !== -1) {
    startIdx = firstBracket;
    endIdx = noTrailingCommas.lastIndexOf(']');
  }

  if (startIdx !== -1 && endIdx > startIdx) {
    const candidate = noTrailingCommas.substring(startIdx, endIdx + 1);
    try {
      return JSON.parse(candidate);
    } catch (innerErr) {
      const candNoCommas = candidate.replace(/,\s*([\]}])/g, '$1');
      try {
        return JSON.parse(candNoCommas);
      } catch (innerErr2) {
        throw new Error(`Invalid JSON: ${innerErr2.message}`);
      }
    }
  }

  throw new Error("Invalid JSON: Could not find a valid JSON object or array.");
}

function normalizeQuestionItem(q, qIdx) {
  if (!q || typeof q !== 'object') {
    throw new Error(`Question at index ${qIdx + 1} is not a valid object.`);
  }

  const id = (q.id && String(q.id).trim()) || `q${qIdx + 1}`;
  const text = (q.text || q.question || q.stem || '').trim();
  if (!text) {
    throw new Error(`Question ${qIdx + 1} (${id}) is missing question text.`);
  }

  const rawOptions = q.options || q.choices || [];
  if (!Array.isArray(rawOptions) || rawOptions.length !== 4) {
    throw new Error(`Question ${qIdx + 1} (${id}) must contain exactly 4 options.`);
  }

  const cleanedOptions = rawOptions.map(opt => cleanOptionPrefix(String(opt !== undefined && opt !== null ? opt : '').trim()));

  // Resolve correct answer index
  let ansIdx = q.correctAnswerIndex;
  if (ansIdx === undefined || ansIdx === null) {
    ansIdx = q.correctAnswer !== undefined ? q.correctAnswer : (q.answer !== undefined ? q.answer : (q.correctOption !== undefined ? q.correctOption : q.answerIndex));
  }

  if (typeof ansIdx === 'string') {
    const trimmed = ansIdx.trim().toUpperCase();
    if (['A', 'B', 'C', 'D'].includes(trimmed)) {
      ansIdx = trimmed.charCodeAt(0) - 65;
    } else if (/^[0-3]$/.test(trimmed)) {
      ansIdx = parseInt(trimmed, 10);
    } else if (trimmed === '1' || trimmed === '2' || trimmed === '3' || trimmed === '4') {
      ansIdx = parseInt(trimmed, 10) - 1;
    } else {
      const matchIdx = cleanedOptions.findIndex(o => o.toLowerCase() === ansIdx.trim().toLowerCase());
      if (matchIdx !== -1) {
        ansIdx = matchIdx;
      } else {
        const rawMatch = rawOptions.findIndex(o => String(o).trim().toLowerCase() === ansIdx.trim().toLowerCase());
        if (rawMatch !== -1) ansIdx = rawMatch;
      }
    }
  }

  if (typeof ansIdx !== 'number' || isNaN(ansIdx) || ansIdx < 0 || ansIdx > 3) {
    throw new Error(`Question ${qIdx + 1} (${id}) has invalid 'correctAnswerIndex' (must resolve to 0, 1, 2, or 3, or 'A'-'D').`);
  }

  // Canonical normalization of subject
  const subjects = normalizeToArray(q.subject).map(s => normalizeSubject(s));
  const validSubjects = subjects.filter(s => MBBS_SUBJECTS_LIST.includes(s));
  const finalSubject = validSubjects.length > 0 ? validSubjects : ['Medicine'];

  // Organ system
  const systems = normalizeToArray(q.system).map(s => normalizeSystem(s));
  const validSystems = systems.filter(s => STANDARD_SYSTEMS_LIST.includes(s));
  const finalSystem = validSystems.length > 0 ? validSystems : ['General'];

  return {
    id,
    text,
    options: cleanedOptions,
    correctAnswerIndex: ansIdx,
    subject: finalSubject,
    system: finalSystem,
    format: canonicalizeFormat(q.format, text),
    difficulty: canonicalizeDifficulty(q.difficulty),
    explanation: typeof q.explanation === 'string' ? q.explanation.trim() : '',
    reference: typeof q.reference === 'string' ? q.reference.trim() : '',
    topic: typeof q.topic === 'string' ? q.topic.trim() : ''
  };
}

function validateJsonContent(rawText) {
  if (!rawText || !rawText.trim()) {
    hideValidationAlert();
    DOM.startExamBtn.disabled = true;
    AppState.examData = null;
    return;
  }

  try {
    let parsed = parseJsonFlexible(rawText);

    // If parsed is a single question object: { id: "q1", text: "...", options: [...] }
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && !parsed.questions && !parsed.sections && (parsed.text || parsed.question) && (parsed.options || parsed.choices)) {
      parsed = { questions: [parsed] };
    }

    // If parsed is an array of questions: [ { ... }, { ... } ]
    if (Array.isArray(parsed)) {
      parsed = { questions: parsed };
    }

    if (!parsed || typeof parsed !== 'object') {
      throw new Error("Invalid JSON: Root must be an object or array.");
    }

    // Determine / Verify examType
    const declaredType = (parsed.examType || parsed.examMode || AppState.examMode || 'neetpg').toLowerCase();
    if (declaredType.includes('ini') || declaredType.includes('cbt_ini')) {
      AppState.examMode = 'inicet';
    } else if (declaredType.includes('neet') || declaredType.includes('pg')) {
      AppState.examMode = 'neetpg';
    }
    updateExamModeUI();

    // Default marking scheme if omitted
    if (!parsed.markingScheme) {
      parsed.markingScheme = AppState.examMode === 'inicet'
        ? { correct: 1, incorrect: -0.333, unattempted: 0 }
        : { correct: 4, incorrect: -1, unattempted: 0 };
    }

    let allQuestions = [];

    if (Array.isArray(parsed.sections) && parsed.sections.length > 0) {
      // Pre-partitioned exam package format (e.g. neetpg.json, inicet.json, or saved test package)
      let totalQ = 0;
      parsed.sections.forEach((sec, sIdx) => {
        if (!sec.id || !sec.name || !Array.isArray(sec.questions)) {
          throw new Error(`Section at index ${sIdx} is missing 'id', 'name', or 'questions' array.`);
        }
        sec.questions = sec.questions.map((q) => {
          totalQ++;
          const normQ = normalizeQuestionItem(q, totalQ - 1);
          allQuestions.push(normQ);
          return normQ;
        });
      });
      parsed.questions = allQuestions;
    } else if (Array.isArray(parsed.questions) && parsed.questions.length > 0) {
      // Question dataset format (from Copy AI Prompt or exported questions)
      allQuestions = parsed.questions.map((q, qIdx) => normalizeQuestionItem(q, qIdx));
      parsed.questions = allQuestions;

      // Automatically partition into standard sections/blocks matching target examMode
      const packaged = partitionQuestionsIntoSections(allQuestions, AppState.examMode);
      parsed.sections = packaged.sections;
      if (!parsed.examTitle) parsed.examTitle = packaged.examTitle;
      if (!parsed.examType) parsed.examType = packaged.examType;
    } else {
      throw new Error("Invalid JSON: Root must contain a non-empty 'questions' or 'sections' array.");
    }

    if (allQuestions.length === 0) {
      throw new Error("Invalid JSON: Exam must contain at least one question.");
    }

    hideValidationAlert();
    DOM.startExamBtn.disabled = false;
    AppState.examData = parsed;

    const blockWord = AppState.examMode === 'inicet' ? 'blocks' : 'sections';
    showValidationNotice(`Valid ${AppState.examMode.toUpperCase()} configuration: ${parsed.sections.length} ${blockWord}, ${allQuestions.length} total questions validated.`, true);
  } catch (err) {
    showValidationNotice(err.message, false);
    DOM.startExamBtn.disabled = true;
    AppState.examData = null;
  }
}

function showValidationNotice(message, isValid) {
  DOM.validationMsg.textContent = message;
  DOM.validationAlert.classList.remove('hidden');
  DOM.validationAlert.classList.toggle('alert-warning', !isValid);
  DOM.validationAlert.classList.toggle('alert-success', isValid);
  DOM.validationAlert.style.backgroundColor = isValid ? 'var(--alert-solid-success-bg)' : 'var(--alert-solid-error-bg)';
  DOM.validationAlert.style.borderColor = isValid ? 'var(--pastel-green)' : 'var(--pastel-red)';
  DOM.validationAlert.style.color = isValid ? 'var(--pastel-green)' : 'var(--pastel-red)';
}

function hideValidationAlert() {
  DOM.validationAlert.classList.add('hidden');
}

async function loadDefaultSample() {
  const fileName = AppState.examMode === 'inicet' ? 'inicet.json' : 'neetpg.json';
  try {
    const res = await fetch(fileName);
    if (!res.ok) throw new Error("Fetch failed");
    const text = await res.text();
    DOM.jsonTextInput.value = text;
    DOM.fileNameDisplay.textContent = `${fileName} (fallback dataset)`;
    validateJsonContent(text);
  } catch (e) {
    const fallback = AppState.examMode === 'inicet' ? FALLBACK_INI_DATA : FALLBACK_NEET_DATA;
    const jsonStr = JSON.stringify(fallback, null, 2);
    DOM.jsonTextInput.value = jsonStr;
    DOM.fileNameDisplay.textContent = `${fileName} (embedded dataset)`;
    validateJsonContent(jsonStr);
  }
}

// ==========================================================================
// 6.5 AI Test Generator Controller
// ==========================================================================
function initAiGeneratorUI() {
  if (!DOM.setupAiPanel) return;

  // Load and render saved API key state
  renderApiKeyStatus();

  // Engine is strictly locked to Gemini 3.5 Flash at 0.15 temperature
  AppState.aiModel = 'gemini-3.5-flash';
  AppState.aiTemperature = 0.15;

  // Initialize Session Mode
  setSessionMode(AppState.sessionMode || 'practice');

  // Set initial scope state
  if (DOM.selectAiScope) {
    DOM.selectAiScope.value = AppState.aiScope || 'grand';
    if (DOM.aiCustomScopeDrawer) {
      DOM.aiCustomScopeDrawer.classList.toggle('hidden', DOM.selectAiScope.value !== 'custom');
    }
  }

  if (DOM.selectAiDifficulty && AppState.aiDifficulty) {
    DOM.selectAiDifficulty.value = AppState.aiDifficulty;
  }
  if (DOM.selectAiStyle && AppState.aiStyle) {
    DOM.selectAiStyle.value = AppState.aiStyle;
  }

  renderSubjectChips();
  renderSystemChips();
  updateScopeBadges();
  updateAiSizingBreakdown();
  updateAiConfigSummary();
}

function renderApiKeyStatus() {
  const savedKey = localStorage.getItem('triage_gemini_api_key') || '';
  if (savedKey) {
    if (DOM.inputGeminiApiKey) DOM.inputGeminiApiKey.value = savedKey;
    if (DOM.aiKeyStatusPill) {
      DOM.aiKeyStatusPill.textContent = 'CONFIGURED';
      DOM.aiKeyStatusPill.classList.add('configured');
    }
    if (DOM.keyMaskText) {
      const masked = savedKey.length > 8 ? `${savedKey.slice(0, 6)}••••••••` : '••••••••';
      DOM.keyMaskText.textContent = `API Key: ${masked}`;
    }
    if (DOM.keyStatusDisplay) DOM.keyStatusDisplay.classList.remove('hidden');
    if (DOM.keyEditorRow) DOM.keyEditorRow.classList.add('hidden');
  } else {
    if (DOM.inputGeminiApiKey) DOM.inputGeminiApiKey.value = '';
    if (DOM.aiKeyStatusPill) {
      DOM.aiKeyStatusPill.textContent = 'NOT CONFIGURED';
      DOM.aiKeyStatusPill.classList.remove('configured');
    }
    if (DOM.keyMaskText) {
      DOM.keyMaskText.textContent = 'No API key configured';
    }
    if (DOM.keyStatusDisplay) DOM.keyStatusDisplay.classList.add('hidden');
    if (DOM.keyEditorRow) DOM.keyEditorRow.classList.remove('hidden');
  }
  updateStepHeaderBadges();
}

async function startSampleDirect() {
  await loadDefaultSample();
  if (AppState.examData) {
    startExamSession();
  }
}

function switchAiSubtab(stepId) {
  const validSteps = ['scope', 'format', 'generate'];
  if (!validSteps.includes(stepId)) stepId = 'scope';
  AppState.aiActiveSubtab = stepId;

  // Update subtab buttons (Level 1: Action + Status)
  if (DOM.tabAiStepScope) DOM.tabAiStepScope.classList.toggle('active', stepId === 'scope');
  if (DOM.tabAiStepFormat) DOM.tabAiStepFormat.classList.toggle('active', stepId === 'format');
  if (DOM.tabAiStepGenerate) DOM.tabAiStepGenerate.classList.toggle('active', stepId === 'generate');

  // Update step subpanels
  if (DOM.aiPanelStepScope) {
    DOM.aiPanelStepScope.classList.toggle('hidden', stepId !== 'scope');
    DOM.aiPanelStepScope.classList.toggle('active', stepId === 'scope');
  }
  if (DOM.aiPanelStepFormat) {
    DOM.aiPanelStepFormat.classList.toggle('hidden', stepId !== 'format');
    DOM.aiPanelStepFormat.classList.toggle('active', stepId === 'format');
  }
  if (DOM.aiPanelStepGenerate) {
    DOM.aiPanelStepGenerate.classList.toggle('hidden', stepId !== 'generate');
    DOM.aiPanelStepGenerate.classList.toggle('active', stepId === 'generate');
  }

  updateAiConfigSummary();
}

function updateAiConfigSummary() {
  if (!DOM.aiConfigSummaryBar) return;

  // 1. Target Exam
  if (DOM.summaryTagMode) {
    DOM.summaryTagMode.textContent = AppState.examMode === 'inicet' ? 'INI-CET' : 'NEET-PG';
  }

  // 2. Syllabus Scope
  if (DOM.summaryTagScope) {
    if (AppState.aiScope === 'grand') {
      DOM.summaryTagScope.textContent = 'Grand Test (19 Subjects)';
    } else if (AppState.aiScope === 'subject') {
      const subj = DOM.selectAiSubject ? DOM.selectAiSubject.value : 'Medicine';
      DOM.summaryTagScope.textContent = `Subject: ${subj}`;
    } else if (AppState.aiScope === 'system') {
      const sys = DOM.selectAiSystem ? DOM.selectAiSystem.value : 'Cardiovascular System';
      DOM.summaryTagScope.textContent = `System: ${sys}`;
    } else if (AppState.aiScope === 'topic') {
      const customTopic = DOM.inputAiCustomTopic ? DOM.inputAiCustomTopic.value.trim() : '';
      DOM.summaryTagScope.textContent = customTopic ? `Topic: "${customTopic.slice(0, 18)}..."` : 'Custom Topic';
    } else {
      const subjCount = AppState.aiSelectedSubjects ? AppState.aiSelectedSubjects.length : 0;
      const sysCount = AppState.aiSelectedSystems ? AppState.aiSelectedSystems.length : 0;
      const customTopic = DOM.inputAiCustomTopic ? DOM.inputAiCustomTopic.value.trim() : '';

      if (customTopic) {
        DOM.summaryTagScope.textContent = `Custom: "${customTopic.slice(0, 20)}${customTopic.length > 20 ? '...' : ''}"`;
      } else if (subjCount > 0 && sysCount > 0) {
        DOM.summaryTagScope.textContent = `${subjCount} Subj, ${sysCount} Sys`;
      } else if (subjCount > 0) {
        DOM.summaryTagScope.textContent = `${subjCount} Subjects`;
      } else if (sysCount > 0) {
        DOM.summaryTagScope.textContent = `${sysCount} Systems`;
      } else {
        DOM.summaryTagScope.textContent = 'Custom Scope';
      }
    }
  }

  // 3. Question Count
  if (DOM.summaryTagCount) {
    const count = parseInt(AppState.aiQuestionCount, 10) || 10;
    DOM.summaryTagCount.textContent = `${count} Qs`;
  }

  // 4. Difficulty
  if (DOM.summaryTagDiff) {
    const diffMap = {
      'balanced': 'Balanced',
      'easy': 'Easy',
      'medium': 'Medium',
      'hard': 'Hard'
    };
    DOM.summaryTagDiff.textContent = diffMap[AppState.aiDifficulty] || 'Balanced';
  }

  // 5. Model
  if (DOM.summaryTagModel) {
    const model = AppState.aiModel || 'gemini-3.5-flash';
    if (model === 'gemini-3.5-flash') {
      DOM.summaryTagModel.textContent = 'Gemini 3.5 Flash';
    } else if (model === 'gemini-2.5-flash') {
      DOM.summaryTagModel.textContent = 'Gemini 2.5 Flash';
    } else if (model === 'gemini-2.5-pro') {
      DOM.summaryTagModel.textContent = 'Gemini 2.5 Pro';
    } else {
      DOM.summaryTagModel.textContent = model.length > 18 ? model.slice(0, 16) + '...' : model;
    }
  }
}

function switchSetupMode(mode) {
  const validModes = ['ai', 'sample', 'manual'];
  if (!validModes.includes(mode)) mode = 'ai';
  AppState.setupMode = mode;

  if (DOM.tabSetupAi) DOM.tabSetupAi.classList.toggle('active', mode === 'ai');
  if (DOM.tabSetupSample) DOM.tabSetupSample.classList.toggle('active', mode === 'sample');
  if (DOM.tabSetupManual) DOM.tabSetupManual.classList.toggle('active', mode === 'manual');

  if (DOM.setupAiPanel) DOM.setupAiPanel.classList.toggle('hidden', mode !== 'ai');
  if (DOM.setupSamplePanel) DOM.setupSamplePanel.classList.toggle('hidden', mode !== 'sample');
  if (DOM.setupManualPanel) DOM.setupManualPanel.classList.toggle('hidden', mode !== 'manual');
  persistAppState();
}

function saveApiKey() {
  if (!DOM.inputGeminiApiKey) return;
  const key = DOM.inputGeminiApiKey.value.trim();
  if (!key) {
    showToast("Please enter an API key to save.");
    return;
  }
  localStorage.setItem('triage_gemini_api_key', key);
  renderApiKeyStatus();
  updateStepHeaderBadges();
  showToast("Gemini API key saved to browser local storage.");
}

function clearApiKey() {
  localStorage.removeItem('triage_gemini_api_key');
  renderApiKeyStatus();
  updateStepHeaderBadges();
  showToast("Gemini API key removed.");
}

function toggleApiKeyMask() {
  if (!DOM.inputGeminiApiKey) return;
  if (DOM.inputGeminiApiKey.type === 'password') {
    DOM.inputGeminiApiKey.type = 'text';
    DOM.btnToggleKeyMask.textContent = 'Hide';
  } else {
    DOM.inputGeminiApiKey.type = 'password';
    DOM.btnToggleKeyMask.textContent = 'Show';
  }
}

function setAiScope(scope) {
  AppState.aiScope = scope;
  if (DOM.selectAiScope) {
    DOM.selectAiScope.value = scope;
  }
  if (DOM.btnScopeGrand) DOM.btnScopeGrand.classList.toggle('active', scope === 'grand');
  if (DOM.btnScopeCustom) DOM.btnScopeCustom.classList.toggle('active', scope === 'custom');
  if (DOM.aiCustomScopeDrawer) DOM.aiCustomScopeDrawer.classList.toggle('hidden', scope !== 'custom');
  updateScopeBadges();
  updateAiConfigSummary();
  persistAppState();
}

function updateScopeBadges() {
  const sCount = AppState.aiSelectedSubjects ? AppState.aiSelectedSubjects.length : 0;
  const sysCount = AppState.aiSelectedSystems ? AppState.aiSelectedSystems.length : 0;

  if (DOM.countSelectedSubjects) {
    DOM.countSelectedSubjects.textContent = sCount;
  }
  if (DOM.countSelectedSystems) {
    DOM.countSelectedSystems.textContent = sysCount;
  }
  if (DOM.aiScopeSummaryPill) {
    if (AppState.aiScope === 'grand') {
      DOM.aiScopeSummaryPill.textContent = 'Full Syllabus (All 19 Subjects & 16 Systems)';
    } else {
      const topic = (DOM.inputAiCustomTopic && DOM.inputAiCustomTopic.value.trim()) || '';
      let text = `Custom Syllabus: ${sCount}/19 Subjects, ${sysCount}/16 Systems`;
      if (topic) text += ` • "${topic}"`;
      DOM.aiScopeSummaryPill.textContent = text;
    }
  }
}

function renderSubjectChips() {
  if (!DOM.aiSubjectsChipsGrid) return;
  DOM.aiSubjectsChipsGrid.innerHTML = '';
  MBBS_SUBJECTS_LIST.forEach(subj => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'btn ai-chip';
    chip.dataset.subject = subj;
    chip.textContent = subj;
    if (AppState.aiSelectedSubjects.includes(subj)) {
      chip.classList.add('active');
    }
    chip.addEventListener('click', () => {
      toggleSubjectSelection(subj, chip);
    });
    DOM.aiSubjectsChipsGrid.appendChild(chip);
  });
  updateScopeBadges();
}

function toggleSubjectSelection(subj, chipEl) {
  const idx = AppState.aiSelectedSubjects.indexOf(subj);
  if (idx === -1) {
    AppState.aiSelectedSubjects.push(subj);
    chipEl.classList.add('active');
  } else {
    AppState.aiSelectedSubjects.splice(idx, 1);
    chipEl.classList.remove('active');
  }
  updateScopeBadges();
  updateAiConfigSummary();
  persistAppState();
}

function selectAllSubjects() {
  AppState.aiSelectedSubjects = [...MBBS_SUBJECTS_LIST];
  renderSubjectChips();
  updateAiConfigSummary();
  persistAppState();
}

function clearAllSubjects() {
  AppState.aiSelectedSubjects = [];
  renderSubjectChips();
  updateAiConfigSummary();
  persistAppState();
}

function renderSystemChips() {
  if (!DOM.aiSystemsChipsGrid) return;
  DOM.aiSystemsChipsGrid.innerHTML = '';
  STANDARD_SYSTEMS_LIST.forEach(sys => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'btn ai-chip';
    chip.dataset.system = sys;
    chip.textContent = sys;
    if (AppState.aiSelectedSystems.includes(sys)) {
      chip.classList.add('active');
    }
    chip.addEventListener('click', () => {
      toggleSystemSelection(sys, chip);
    });
    DOM.aiSystemsChipsGrid.appendChild(chip);
  });
  updateScopeBadges();
}

function toggleSystemSelection(sys, chipEl) {
  const idx = AppState.aiSelectedSystems.indexOf(sys);
  if (idx === -1) {
    AppState.aiSelectedSystems.push(sys);
    chipEl.classList.add('active');
  } else {
    AppState.aiSelectedSystems.splice(idx, 1);
    chipEl.classList.remove('active');
  }
  updateScopeBadges();
  updateAiConfigSummary();
  persistAppState();
}

function selectAllSystems() {
  AppState.aiSelectedSystems = [...STANDARD_SYSTEMS_LIST];
  renderSystemChips();
  updateAiConfigSummary();
  persistAppState();
}

function clearAllSystems() {
  AppState.aiSelectedSystems = [];
  renderSystemChips();
  updateAiConfigSummary();
  persistAppState();
}

function setAiQuestionCount(count, updateInput = true) {
  AppState.aiQuestionCount = count;
  if (DOM.aiCountPresets) {
    const presetBtns = DOM.aiCountPresets.querySelectorAll('.btn-count-preset');
    let matchedPreset = false;
    presetBtns.forEach(btn => {
      if (btn.id === 'btn-count-custom-pill') return;
      const isMatch = parseInt(btn.dataset.count, 10) === count;
      btn.classList.toggle('active', isMatch);
      if (isMatch) matchedPreset = true;
    });
    if (DOM.aiCustomSizingElement) {
      DOM.aiCustomSizingElement.classList.toggle('active', !matchedPreset);
    }
  }
  if (updateInput && DOM.inputAiCustomCount) {
    DOM.inputAiCustomCount.value = count;
  }
  updateAiSizingBreakdown();
  updateAiConfigSummary();
  persistAppState();
}

function calculateSectionPartition(totalQ, examMode) {
  const isNeet = examMode === 'neetpg';
  const paceSeconds = isNeet ? 63 : 54;

  if (AppState.sessionMode === 'practice') {
    return {
      numSections: 1,
      totalQ,
      totalMinutes: 0,
      durationMinutes: 0,
      totalSeconds: 0,
      batchCount: Math.ceil(totalQ / 25),
      sectionsInfo: [
        {
          letter: 'A',
          name: 'Practice Drill',
          count: totalQ,
          duration: 0
        }
      ]
    };
  }

  // Exam Mode: Dynamic section division based on total questions
  const targetSecSize = isNeet ? 36 : 50;
  const numSections = Math.max(1, Math.ceil(totalQ / targetSecSize));
  const baseCount = Math.floor(totalQ / numSections);
  let remainder = totalQ % numSections;

  const sectionsInfo = [];
  let totalMinutes = 0;

  for (let i = 0; i < numSections; i++) {
    const secLetter = String.fromCharCode(65 + i);
    const secQCount = baseCount + (remainder > 0 ? 1 : 0);
    if (remainder > 0) remainder--;

    let secDuration;
    if (isNeet && secQCount === 36) {
      secDuration = 42;
    } else if (!isNeet && secQCount === 50) {
      secDuration = 45;
    } else {
      secDuration = Math.max(1, Math.round((secQCount * paceSeconds) / 60));
    }
    totalMinutes += secDuration;

    sectionsInfo.push({
      letter: secLetter,
      name: isNeet ? `Section ${secLetter}` : `Block ${i + 1}`,
      count: secQCount,
      duration: secDuration
    });
  }

  return {
    numSections,
    totalQ,
    totalMinutes,
    batchCount: Math.ceil(totalQ / 25),
    sectionsInfo
  };
}

function formatTimeBudget(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins} min${secs > 0 ? ` ${String(secs).padStart(2, '0')}s` : ' 00s'}`;
}

function updateAiSizingBreakdown() {
  if (!DOM.aiSizingBreakdown) return;
  const examLabel = AppState.examMode === 'inicet' ? 'INI-CET' : 'NEET-PG';
  const isNeet = AppState.examMode === 'neetpg';
  const count = parseInt(AppState.aiQuestionCount, 10) || 10;
  const paceSeconds = isNeet ? 63 : 54;
  const targetSecSize = isNeet ? 36 : 50;

  if (AppState.sessionMode === 'practice') {
    DOM.aiSizingBreakdown.innerHTML = `<strong>Practice Mode:</strong> Elapsed Timer • 1 Block (${count} Questions) • Free Navigation • Untimed Drill`;
    return;
  }

  // Exam Mode
  const numSections = Math.max(1, Math.ceil(count / targetSecSize));
  const avgSecCount = Math.round(count / numSections);
  let secDurationMinutes;
  if (isNeet && avgSecCount === 36) {
    secDurationMinutes = 42;
  } else if (!isNeet && avgSecCount === 50) {
    secDurationMinutes = 45;
  } else {
    secDurationMinutes = Math.max(1, Math.round((avgSecCount * paceSeconds) / 60));
  }
  const totalMinutes = secDurationMinutes * numSections;
  const secName = isNeet ? 'Section' : 'Block';
  DOM.aiSizingBreakdown.innerHTML = `<strong>Exam Mode:</strong> ${count} Qs in ${numSections} ${secName}${numSections > 1 ? 's' : ''} (~${avgSecCount} Qs/sec) • ${secDurationMinutes} min/${secName.toLowerCase()} (${totalMinutes} min total • ${paceSeconds}s/Q budget) • Section locks on submit`;
}

function setAiDifficulty(diff) {
  AppState.aiDifficulty = diff;
  if (DOM.aiDifficultyGroup) {
    DOM.aiDifficultyGroup.querySelectorAll('.btn-segmented').forEach(b => {
      b.classList.toggle('active', b.dataset.value === diff);
    });
  }
  updateAiConfigSummary();
  persistAppState();
}

function setAiStyle(style) {
  AppState.aiStyle = style;
  if (DOM.aiStyleGroup) {
    DOM.aiStyleGroup.querySelectorAll('.btn-segmented').forEach(b => {
      b.classList.toggle('active', b.dataset.value === style);
    });
  }
  persistAppState();
}

function toggleAiAdvancedDrawer() {
  if (!DOM.aiAdvancedDrawer) return;
  const isHidden = DOM.aiAdvancedDrawer.classList.toggle('hidden');
  if (DOM.aiAdvancedIndicator) {
    DOM.aiAdvancedIndicator.textContent = isHidden ? 'EXPAND [+]' : 'COLLAPSE [−]';
  }
}

function cancelAiGeneration() {
  if (AppState.aiAbortController) {
    AppState.aiAbortController.abort();
  }
}

function buildAiTestPrompt(options = {}) {
  const count = options.count || AppState.aiQuestionCount || 10;
  const examMode = options.examMode || AppState.examMode || 'neetpg';
  const isNeet = examMode === 'neetpg';
  const scope = options.scope || AppState.aiScope || (DOM.selectAiScope ? DOM.selectAiScope.value : 'grand');
  const difficulty = options.difficulty || AppState.aiDifficulty || (DOM.selectAiDifficulty ? DOM.selectAiDifficulty.value : 'balanced');
  const style = options.style || AppState.aiStyle || (DOM.selectAiStyle ? DOM.selectAiStyle.value : 'mixed');
  const customTopic = options.customTopic !== undefined ? options.customTopic : (DOM.inputAiCustomTopic ? DOM.inputAiCustomTopic.value.trim() : '');
  const selectedSubjects = options.selectedSubjects || AppState.aiSelectedSubjects || [];
  const selectedSystems = options.selectedSystems || AppState.aiSelectedSystems || [];

  let scopeInstruction = "";
  if (scope === 'grand') {
    scopeInstruction = "Scope: Full Grand Test covering all 19 standard MBBS subjects with realistic national postgraduate entrance weighting (General Medicine, Surgery, OBG, Pediatrics, Pathology, Pharmacology, Anatomy, Physiology, Biochemistry, Microbiology, Preventive & Social Medicine, Forensic Medicine, Ophthalmology, ENT, Dermatology, Psychiatry, Radiology, Anesthesiology, Orthopedics).";
  } else {
    const parts = [];
    if (selectedSubjects && selectedSubjects.length > 0) {
      parts.push(`Subjects (${selectedSubjects.length}): [${selectedSubjects.join(', ')}]`);
    } else {
      parts.push(`Subjects: All 19 standard MBBS subjects`);
    }
    if (selectedSystems && selectedSystems.length > 0) {
      parts.push(`Organ Systems (${selectedSystems.length}): [${selectedSystems.join(', ')}]`);
    }
    if (customTopic) {
      parts.push(`Targeted Clinical Topics / Keywords: "${customTopic}"`);
    }
    scopeInstruction = `Scope: Custom Scope focused on:\n- ${parts.join('\n- ')}`;
  }

  let diffInstruction = "";
  if (difficulty === 'balanced') {
    diffInstruction = "Difficulty Mix: Balanced (Exam-realistic distribution: ~20% easy must-know facts, ~60% medium two-step concepts, ~20% hard rank differentiators).";
  } else if (difficulty === 'easy') {
    diffInstruction = "Difficulty Level: Easy. Must-know facts, fundamental concepts, single-step direct reasoning, and high-frequency repeat topics.";
  } else if (difficulty === 'medium') {
    diffInstruction = "Difficulty Level: Medium. Two-step reasoning, high-yield clinical concepts, and moderately tough discriminating questions.";
  } else if (difficulty === 'hard') {
    diffInstruction = "Difficulty Level: Hard. Complex multi-step reasoning, edge cases, rare topics, tough discriminators, and rank outliers.";
  }

  let styleInstruction = "";
  if (style === 'mixed') {
    styleInstruction = "Question Formats: Mixed (Realistic). Provide an exam-realistic mix of rapid-recall One-liners, conceptual mechanisms, and comprehensive Clinical Case Vignettes.";
  } else if (style === 'oneliner') {
    styleInstruction = "Question Formats: One-liners. Rapid recall, direct associations, and crisp diagnostic or pharmacological fact-based questions.";
  } else if (style === 'conceptual') {
    styleInstruction = "Question Formats: Conceptual. Pathophysiology, mechanisms of action, diagnostic algorithms, and causal disease links.";
  } else if (style === 'vignette') {
    styleInstruction = "Question Formats: Clinical Case Scenarios. Full patient vignettes with age, gender, presentation, vitals, labs, and management dilemmas.";
  }

  const examFlavor = isNeet
    ? "Target Test: NEET-PG (National Eligibility cum Entrance Test - Postgraduate). Follow the clinical vignette pattern of NBE (National Board of Examinations)."
    : "Target Test: INI-CET (Institute of National Importance Combined Entrance Test). Follow the rigorous AIIMS / PGIMER pattern emphasizing integrated basic science concepts, pathophysiology, and discriminative clinical decisions.";

  const batchStart = options.batchStartIndex || 1;

  const prompt = `You are an expert medical educator and test item writer for Indian medical postgraduate entrance examinations (NEET-PG / INI-CET).

Generate exactly ${count} high-quality, authentic multiple-choice questions matching these specifications:

${examFlavor}
${scopeInstruction}
${diffInstruction}
${styleInstruction}

MANDATORY TAXONOMY REQUIREMENTS:
1. 'subject' field MUST be an array containing 1 or more of the 19 standard MBBS subjects:
   ["Anatomy", "Anesthesiology", "Biochemistry", "Community Medicine", "Dermatology", "ENT", "Forensic Medicine", "Medicine", "Microbiology", "Obstetrics & Gynecology", "Ophthalmology", "Orthopedics", "Pathology", "Pediatrics", "Pharmacology", "Physiology", "Psychiatry", "Radiology", "Surgery"]
2. 'system' field MUST be an array containing 1 or more of standard organ systems:
   ["Cardiovascular System", "Central Nervous System", "Endocrine System", "Gastrointestinal System", "General", "Head & Neck", "Hematology & Oncology", "Hepatobiliary System", "Immune System", "Integumentary System", "Lower Limb", "Musculoskeletal System", "Renal & Urinary System", "Reproductive System", "Respiratory System", "Upper Limb"]
3. 'format' field MUST be strictly one of: "Clinical Vignette", "One-Liner", "Conceptual"
4. 'difficulty' field MUST be strictly one of: "Easy", "Medium", "Hard"
5. 'topic' field MUST provide a concise medical topic / keyword tag (e.g. "Myocardial Infarction", "Auer Rods").
6. 'reference' field SHOULD provide an authoritative standard medical textbook citation (e.g. "Harrison's Principles of Internal Medicine, 21st ed., Ch. 270").
7. Each question must have exactly 4 distinct options.
8. 'correctAnswerIndex' must be 0, 1, 2, or 3 (0-indexed).
9. Provide a thorough, educational 'explanation' detailing why the correct option is right and why the other three distractors are incorrect, plus key high-yield takeaways.

OUTPUT FORMAT:
Return a strictly valid JSON object with a single "questions" array containing the ${count} question objects.
Output ONLY raw JSON. Do NOT include markdown fences, backticks, comments, or intro/outro text.

JSON Schema structure:
{
  "questions": [
    {
      "id": "q${batchStart}",
      "text": "Full question text or clinical vignette...",
      "options": [
        "Option A text",
        "Option B text",
        "Option C text",
        "Option D text"
      ],
      "correctAnswerIndex": 0,
      "subject": ["Medicine"],
      "system": ["Cardiovascular System"],
      "format": "Clinical Vignette",
      "difficulty": "Medium",
      "topic": "Acute Coronary Syndrome",
      "reference": "Harrison's Principles of Internal Medicine, 21st ed., Ch. 270",
      "explanation": "Detailed clinical rationale and distractor breakdown..."
    }
  ]
}`;

  return prompt;
}

function partitionQuestionsIntoSections(questions, examMode) {
  const totalQ = questions.length;
  const partition = calculateSectionPartition(totalQ, examMode);
  const isNeet = examMode === 'neetpg';

  const sections = [];
  let qOffset = 0;

  partition.sectionsInfo.forEach((info) => {
    const secQuestions = questions.slice(qOffset, qOffset + info.count);
    qOffset += info.count;

    sections.push({
      id: `sec_${info.letter.toLowerCase()}`,
      name: isNeet ? `Section ${info.letter}` : `Block ${info.letter.charCodeAt(0) - 64}`,
      durationMinutes: info.duration,
      questions: secQuestions
    });
  });

  const markingScheme = isNeet
    ? { correct: 4, incorrect: -1, unattempted: 0 }
    : { correct: 1, incorrect: -0.333, unattempted: 0 };

  const customTitle = (DOM.inputTestName && DOM.inputTestName.value.trim()) || (AppState.customTestName && AppState.customTestName.trim()) || '';
  const defaultTitle = isNeet ? 'NEET-PG Mock Test' : 'INI-CET Mock Test';
  const examTitle = customTitle || defaultTitle;

  return {
    examType: examMode,
    examTitle,
    markingScheme,
    sections
  };
}

async function generateTestWithGemini() {
  const apiKey = (DOM.inputGeminiApiKey ? DOM.inputGeminiApiKey.value.trim() : '') || localStorage.getItem('triage_gemini_api_key');
  if (!apiKey) {
    showToast("Please enter and save your Gemini API key first.");
    if (DOM.inputGeminiApiKey) {
      DOM.inputGeminiApiKey.focus();
    }
    return;
  }

  const totalQ = parseInt(AppState.aiQuestionCount, 10) || 10;
  const model = 'gemini-3.5-flash';
  AppState.aiModel = model;
  AppState.aiTemperature = 0.15;

  // Divide into batches of at most 25 questions
  const batches = [];
  let remaining = totalQ;
  let currentStart = 1;
  while (remaining > 0) {
    const bCount = Math.min(remaining, 25);
    batches.push({ count: bCount, startIndex: currentStart });
    currentStart += bCount;
    remaining -= bCount;
  }

  // Setup UI for generation
  DOM.btnAiGenerate.disabled = true;
  DOM.btnAiCopyPrompt.disabled = true;
  DOM.aiGenerationProgress.classList.remove('hidden');
  DOM.aiProgressFill.style.width = '0%';
  DOM.aiProgressPercentage.textContent = '0%';
  DOM.aiProgressStatus.textContent = `Starting generation of ${totalQ} questions...`;
  DOM.aiProgressBatch.textContent = `Batch 1 of ${batches.length}`;

  AppState.aiAbortController = new AbortController();
  const allQuestions = [];

  try {
    for (let bIdx = 0; bIdx < batches.length; bIdx++) {
      if (AppState.aiAbortController.signal.aborted) {
        throw new Error("Generation cancelled by user.");
      }

      const batch = batches[bIdx];
      const batchNum = bIdx + 1;
      const pct = Math.round((bIdx / batches.length) * 100);

      DOM.aiProgressFill.style.width = `${pct}%`;
      DOM.aiProgressPercentage.textContent = `${pct}%`;
      DOM.aiProgressStatus.textContent = `Generating questions ${batch.startIndex}–${batch.startIndex + batch.count - 1} of ${totalQ}...`;
      DOM.aiProgressBatch.textContent = `Batch ${batchNum} of ${batches.length}`;

      const prompt = buildAiTestPrompt({
        count: batch.count,
        batchStartIndex: batch.startIndex,
        examMode: AppState.examMode,
        scope: AppState.aiScope,
        difficulty: AppState.aiDifficulty,
        style: AppState.aiStyle,
        selectedSubjects: AppState.aiSelectedSubjects,
        selectedSystems: AppState.aiSelectedSystems,
        customTopic: DOM.inputAiCustomTopic ? DOM.inputAiCustomTopic.value.trim() : ''
      });

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AppState.aiAbortController.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.15
          }
        })
      });

      if (!res.ok) {
        let errDetail = `API error ${res.status}`;
        try {
          const errJson = await res.json();
          if (errJson && errJson.error && errJson.error.message) {
            errDetail = errJson.error.message;
          }
        } catch (_) {}

        throw new Error(`Gemini API Error: ${errDetail}`);
      }

      const resData = await res.json();
      const rawText = resData?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) {
        throw new Error(`No content received from Gemini for batch ${batchNum}.`);
      }

      let parsedBatch = null;
      try {
        let cleanText = rawText.trim();
        if (cleanText.startsWith('```')) {
          cleanText = cleanText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
        }
        parsedBatch = JSON.parse(cleanText);
      } catch (e) {
        throw new Error(`Failed to parse batch ${batchNum} JSON: ${e.message}`);
      }

      const qList = Array.isArray(parsedBatch) ? parsedBatch : (parsedBatch.questions || []);
      if (!Array.isArray(qList) || qList.length === 0) {
        throw new Error(`Batch ${batchNum} did not return any questions.`);
      }

      allQuestions.push(...qList);
    }

    DOM.aiProgressFill.style.width = '100%';
    DOM.aiProgressPercentage.textContent = '100%';
    DOM.aiProgressStatus.textContent = `All ${allQuestions.length} questions received. Assembling test sections...`;

    allQuestions.forEach((q, idx) => {
      q.id = `q${idx + 1}`;
      const subjects = normalizeToArray(q.subject).map(s => normalizeSubject(s)).filter(s => MBBS_SUBJECTS_LIST.includes(s));
      q.subject = subjects.length > 0 ? subjects : ['Medicine'];
      const systems = normalizeToArray(q.system).map(s => normalizeSystem(s));
      q.system = systems.length > 0 ? systems : ['General'];
      q.format = canonicalizeFormat(q.format, q.text);
      q.difficulty = canonicalizeDifficulty(q.difficulty);
      q.explanation = typeof q.explanation === 'string' ? q.explanation : '';
      q.reference = typeof q.reference === 'string' ? q.reference.trim() : '';
      q.topic = typeof q.topic === 'string' ? q.topic.trim() : '';
      shuffleQuestionOptions(q);
    });

    const testData = partitionQuestionsIntoSections(allQuestions, AppState.examMode);

    const testJsonStr = JSON.stringify(testData);
    validateJsonContent(testJsonStr);

    AppState.aiGeneratedData = testData;
    AppState.examData = testData;

    showToast(`Test generated successfully: ${allQuestions.length} questions across ${testData.sections.length} sections.`);

    DOM.aiGenerationProgress.classList.add('hidden');
    openTestReadyModal(testData);

  } catch (err) {
    if (err.name === 'AbortError' || err.message.includes('cancelled')) {
      showToast("Generation cancelled.");
    } else {
      console.error(err);
      showToast(`Error: ${err.message}`, 6000);
      if (model !== 'gemini-3.5-flash' && (/switch to "Gemini 3.5 Flash"/i.test(err.message) || /high demand|demand|overloaded|capacity/i.test(err.message))) {
        if (DOM.selectAiModel) {
          DOM.selectAiModel.value = 'gemini-3.5-flash';
          AppState.aiModel = 'gemini-3.5-flash';
          localStorage.setItem('triage_ai_model', 'gemini-3.5-flash');
          if (DOM.inputAiCustomModel) DOM.inputAiCustomModel.classList.add('hidden');
          updateAiConfigSummary();
        }
      }
    }
  } finally {
    DOM.btnAiGenerate.disabled = false;
    DOM.btnAiCopyPrompt.disabled = false;
    DOM.aiGenerationProgress.classList.add('hidden');
    AppState.aiAbortController = null;
  }
}

function openCopyPromptModal() {
  if (!DOM.modalCopyPrompt) return;
  const prompt = buildAiTestPrompt({
    count: AppState.aiQuestionCount,
    examMode: AppState.examMode,
    scope: AppState.aiScope,
    difficulty: AppState.aiDifficulty,
    style: AppState.aiStyle,
    selectedSubjects: AppState.aiSelectedSubjects,
    selectedSystems: AppState.aiSelectedSystems,
    customTopic: DOM.inputAiCustomTopic ? DOM.inputAiCustomTopic.value.trim() : ''
  });
  if (DOM.copyPromptTextarea) DOM.copyPromptTextarea.value = prompt;
  if (DOM.copyPromptChars) DOM.copyPromptChars.textContent = `${prompt.length.toLocaleString()} characters`;
  if (DOM.copyPromptTokens) DOM.copyPromptTokens.textContent = `~${Math.round(prompt.length / 4).toLocaleString()} tokens`;
  DOM.modalCopyPrompt.classList.remove('hidden');
}

function closeCopyPromptModal() {
  if (DOM.modalCopyPrompt) {
    DOM.modalCopyPrompt.classList.add('hidden');
  }
}

function copyPromptToClipboard() {
  if (!DOM.copyPromptTextarea) return;
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(DOM.copyPromptTextarea.value)
      .then(() => {
        showToast("Prompt copied to clipboard!");
        if (DOM.btnCopyPromptAction) {
          DOM.btnCopyPromptAction.textContent = "Copied to Clipboard!";
          setTimeout(() => {
            if (DOM.btnCopyPromptAction) {
              DOM.btnCopyPromptAction.textContent = "Copy Prompt to Clipboard";
            }
          }, 2000);
        }
      })
      .catch(() => {
        showToast("Could not access clipboard. Please copy manually.");
      });
  } else {
    showToast("Clipboard not supported in this browser.");
  }
}

function downloadGeneratedTestJson() {
  if (!AppState.examData) return;
  const jsonStr = JSON.stringify(AppState.examData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const cleanMode = AppState.examMode || 'test';
  a.download = `triage_${cleanMode}_mock_test_${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Test JSON downloaded.");
}

function openStartTestDialog(testData) {
  if (!testData || !DOM.modalStartTest) return;
  AppState.pendingExamPackage = testData;

  const isPractice = AppState.sessionMode === 'practice';
  const isNeet = AppState.examMode === 'neetpg';

  // Count questions and gather metadata
  let totalQ = 0;
  const subjectsSet = new Set();
  const formatsSet = new Set();
  const diffsSet = new Set();

  if (Array.isArray(testData.sections)) {
    testData.sections.forEach(sec => {
      if (Array.isArray(sec.questions)) {
        sec.questions.forEach(q => {
          totalQ++;
          if (Array.isArray(q.subject)) {
            q.subject.forEach(s => subjectsSet.add(s));
          } else if (q.subject) {
            subjectsSet.add(q.subject);
          }
          if (q.format) formatsSet.add(q.format);
          if (q.difficulty) diffsSet.add(q.difficulty);
        });
      }
    });
  } else if (Array.isArray(testData.questions)) {
    testData.questions.forEach(q => {
      totalQ++;
      if (Array.isArray(q.subject)) {
        q.subject.forEach(s => subjectsSet.add(s));
      } else if (q.subject) {
        subjectsSet.add(q.subject);
      }
      if (q.format) formatsSet.add(q.format);
      if (q.difficulty) diffsSet.add(q.difficulty);
    });
  }

  // 1. Mode
  if (DOM.dialogStatMode) {
    DOM.dialogStatMode.textContent = isPractice ? 'Practice Mode' : 'Exam Mode';
  }

  // 2. Exam Type & Marking
  if (DOM.dialogStatExam) {
    DOM.dialogStatExam.textContent = isNeet ? 'NEET-PG (+4 / -1)' : 'INI-CET (+1 / -0.333)';
  }

  // 3. Questions & Sections
  if (DOM.dialogStatQuestions) {
    if (isPractice) {
      DOM.dialogStatQuestions.textContent = `${totalQ} Questions (1 Block • Continuous)`;
    } else {
      const targetSecSize = isNeet ? 36 : 50;
      const numSections = Math.max(1, Math.ceil(totalQ / targetSecSize));
      const secName = isNeet ? 'Section' : 'Block';
      DOM.dialogStatQuestions.textContent = `${totalQ} Questions (${numSections} ${secName}${numSections > 1 ? 's' : ''})`;
    }
  }

  // 4. Time Budget
  if (DOM.dialogStatTime) {
    if (isPractice) {
      DOM.dialogStatTime.textContent = 'No time limit (Elapsed Timer)';
    } else {
      const paceSec = isNeet ? 63 : 54;
      const targetSecSize = isNeet ? 36 : 50;
      const numSections = Math.max(1, Math.ceil(totalQ / targetSecSize));
      const avgSecCount = Math.round(totalQ / numSections);
      let secDurationMinutes;
      if (isNeet && avgSecCount === 36) {
        secDurationMinutes = 42;
      } else if (!isNeet && avgSecCount === 50) {
        secDurationMinutes = 45;
      } else {
        secDurationMinutes = Math.max(1, Math.round((avgSecCount * paceSec) / 60));
      }
      const totalMinutes = secDurationMinutes * numSections;
      DOM.dialogStatTime.textContent = `${totalMinutes} min total (~${secDurationMinutes} min/section • ${paceSec}s/Q)`;
    }
  }

  // 5. Syllabus Scope
  if (DOM.dialogStatSyllabus) {
    if (AppState.setupMode === 'ai') {
      if (AppState.aiScope === 'grand') {
        DOM.dialogStatSyllabus.textContent = 'Full Syllabus (Grand Test • All 19 MBBS Subjects)';
      } else {
        const subjs = AppState.aiSelectedSubjects.length > 0
          ? AppState.aiSelectedSubjects.slice(0, 3).join(', ') + (AppState.aiSelectedSubjects.length > 3 ? ` +${AppState.aiSelectedSubjects.length - 3} more` : '')
          : 'Custom Subjects';
        const topic = (DOM.inputAiCustomTopic && DOM.inputAiCustomTopic.value.trim()) || '';
        DOM.dialogStatSyllabus.textContent = `Custom: ${subjs}${topic ? ` • "${topic}"` : ''}`;
      }
    } else {
      const subjsArr = Array.from(subjectsSet);
      if (subjsArr.length === 0) {
        DOM.dialogStatSyllabus.textContent = 'Curriculum Mapped';
      } else if (subjsArr.length >= 15) {
        DOM.dialogStatSyllabus.textContent = `Full Syllabus (${subjsArr.length} MBBS Subjects)`;
      } else {
        DOM.dialogStatSyllabus.textContent = subjsArr.slice(0, 3).join(', ') + (subjsArr.length > 3 ? ` +${subjsArr.length - 3} more` : '');
      }
    }
  }

  // 6. Difficulty & Format
  if (DOM.dialogStatDiffFormat) {
    if (AppState.setupMode === 'ai') {
      const diffStr = AppState.aiDifficulty ? (AppState.aiDifficulty.charAt(0).toUpperCase() + AppState.aiDifficulty.slice(1)) : 'Balanced';
      const formStr = AppState.aiStyle ? (AppState.aiStyle.charAt(0).toUpperCase() + AppState.aiStyle.slice(1)) : 'Mixed';
      DOM.dialogStatDiffFormat.textContent = `${diffStr} • ${formStr}`;
    } else {
      const diffStr = diffsSet.size > 0 ? Array.from(diffsSet).join(', ') : 'Standard';
      const formStr = formatsSet.size > 0 ? Array.from(formatsSet).join(', ') : 'Mixed';
      DOM.dialogStatDiffFormat.textContent = `${diffStr} • ${formStr}`;
    }
  }

  // 7. Optional Test Name
  if (DOM.inputDialogTestName) {
    const defaultName = isNeet ? 'NEET-PG CBT Mock Test' : 'INI-CET CBT Mock Test';
    const initName = (AppState.customTestName && AppState.customTestName.trim()) || testData.examTitle || defaultName;
    DOM.inputDialogTestName.value = initName;
    DOM.inputDialogTestName.placeholder = defaultName;
  }

  DOM.modalStartTest.classList.remove('hidden');
}

function closeStartTestDialog() {
  if (DOM.modalStartTest) {
    DOM.modalStartTest.classList.add('hidden');
  }
}

// Backward compatibility aliases
const openTestReadyModal = openStartTestDialog;
const closeTestReadyModal = closeStartTestDialog;

function startSampleTestDirect() {
  AppState.isSampleTest = true;
  AppState.examMode = 'neetpg';
  AppState.sessionMode = 'practice';

  const sample10 = [];
  if (FALLBACK_NEET_DATA && Array.isArray(FALLBACK_NEET_DATA.sections)) {
    FALLBACK_NEET_DATA.sections.forEach(sec => {
      if (Array.isArray(sec.questions)) {
        sec.questions.forEach(q => {
          if (sample10.length < 10) {
            sample10.push(JSON.parse(JSON.stringify(q)));
          }
        });
      }
    });
  }

  AppState.examData = {
    examType: 'neetpg',
    examTitle: 'NEET-PG Sample Mock Test',
    totalBlocks: 1,
    defaultBlockDurationMinutes: 0,
    markingScheme: { correct: 4, incorrect: -1, unattempted: 0 },
    sections: [{
      id: 'sec_sample',
      name: 'Sample Test',
      durationMinutes: 0,
      questions: sample10
    }]
  };

  startExamSession();
}

function prepareExamDataForSession(rawExamData) {
  if (!rawExamData) return null;
  // If this is a sample test, preserve its defined structure
  if (AppState.isSampleTest) {
    return rawExamData;
  }

  let allQuestions = [];
  if (Array.isArray(rawExamData.sections)) {
    rawExamData.sections.forEach(sec => {
      if (Array.isArray(sec.questions)) {
        allQuestions.push(...sec.questions);
      }
    });
  } else if (Array.isArray(rawExamData.questions)) {
    allQuestions = [...rawExamData.questions];
  }

  const isPractice = AppState.sessionMode === 'practice';
  const isNeet = AppState.examMode === 'neetpg';

  if (isPractice) {
    return {
      examType: AppState.examMode,
      examTitle: rawExamData.examTitle || (isNeet ? 'NEET-PG Practice Drill' : 'INI-CET Practice Drill'),
      totalBlocks: 1,
      defaultBlockDurationMinutes: 0,
      markingScheme: rawExamData.markingScheme || (isNeet ? { correct: 4, incorrect: -1, unattempted: 0 } : { correct: 1, incorrect: -0.333, unattempted: 0 }),
      sections: [{
        id: 'sec_practice',
        name: 'Practice Drill',
        durationMinutes: 0,
        questions: allQuestions
      }]
    };
  } else {
    // Exam mode: dynamic section division based on total questions
    const targetSecSize = isNeet ? 36 : 50;
    const paceSeconds = isNeet ? 63 : 54;
    const numSections = Math.max(1, Math.ceil(allQuestions.length / targetSecSize));
    const baseCount = Math.floor(allQuestions.length / numSections);
    let remainder = allQuestions.length % numSections;

    const sections = [];
    let qOffset = 0;

    for (let i = 0; i < numSections; i++) {
      const secLetter = String.fromCharCode(65 + i);
      const secQCount = baseCount + (remainder > 0 ? 1 : 0);
      if (remainder > 0) remainder--;

      const secQuestions = allQuestions.slice(qOffset, qOffset + secQCount);
      qOffset += secQCount;

      let secDuration;
      if (isNeet && secQCount === 36) {
        secDuration = 42;
      } else if (!isNeet && secQCount === 50) {
        secDuration = 45;
      } else {
        secDuration = Math.max(1, Math.round((secQCount * paceSeconds) / 60));
      }

      sections.push({
        id: `sec_${secLetter.toLowerCase()}`,
        name: isNeet ? `Section ${secLetter}` : `Block ${i + 1}`,
        durationMinutes: secDuration,
        questions: secQuestions
      });
    }

    return {
      examType: AppState.examMode,
      examTitle: rawExamData.examTitle || (isNeet ? 'NEET-PG CBT Mock Test' : 'INI-CET CBT Mock Test'),
      totalBlocks: sections.length,
      defaultBlockDurationMinutes: sections[0] ? sections[0].durationMinutes : (isNeet ? 42 : 45),
      markingScheme: rawExamData.markingScheme || (isNeet ? { correct: 4, incorrect: -1, unattempted: 0 } : { correct: 1, incorrect: -0.333, unattempted: 0 }),
      sections
    };
  }
}

function startExamSession() {
  if (!AppState.examData) return;

  AppState.examData = prepareExamDataForSession(AppState.examData);

  const customTitle = (DOM.inputDialogTestName && DOM.inputDialogTestName.value.trim()) || (DOM.inputTestName && DOM.inputTestName.value.trim()) || (AppState.customTestName && AppState.customTestName.trim()) || '';
  const defaultTitle = AppState.examMode === 'inicet' ? 'INI-CET Mock Test' : 'NEET-PG Mock Test';
  if (customTitle) {
    AppState.examData.examTitle = customTitle;
  } else if (!AppState.examData.examTitle || AppState.examData.examTitle.includes('CBT Mock') || AppState.examData.examTitle.includes('Practice Drill')) {
    AppState.examData.examTitle = defaultTitle;
  }

  // Deep clone examData to guarantee a clean, isolated session state and enable random option shuffling
  AppState.examData = JSON.parse(JSON.stringify(AppState.examData));
  shuffleExamOptions(AppState.examData);

  AppState.responses = {};
  AppState.sectionTimesLeft = {};
  AppState.sectionStatus = {};
  AppState.practiceElapsedTime = 0;

  const defaultDuration = AppState.examMode === 'inicet' ? 45 : 42;

  AppState.examData.sections.forEach((sec) => {
    AppState.sectionStatus[sec.id] = 'pending';
    AppState.sectionTimesLeft[sec.id] = (sec.durationMinutes || defaultDuration) * 60;

    sec.questions.forEach((q) => {
      AppState.responses[q.id] = {
        selectedOption: null,
        confidence: null, // 'sure' | 'not_sure' | null
        status: 'not_visited',
        bookmarked: false,
        marked: false,
        timeSpent: 0,
        switchCount: 0,
        switchHistory: []
      };
    });
  });

  AppState.activeSectionIndex = 0;
  AppState.activeQuestionIndex = 0;

  switchView('exam');
  renderSectionTabs();
  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
  startActiveSectionTimer();
  persistExamState();
}

function switchView(viewName) {
  // Ensure any previously focused input or element loses focus so shortcuts work cleanly
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }

  const validViews = ['home', 'setup', 'exam', 'review'];
  if (!validViews.includes(viewName)) viewName = 'home';
  AppState.view = viewName;

  if (DOM.viewHome) {
    DOM.viewHome.classList.toggle('active', viewName === 'home');
    DOM.viewHome.classList.toggle('hidden', viewName !== 'home');
  }
  if (DOM.viewSetup) {
    DOM.viewSetup.classList.toggle('active', viewName === 'setup');
    DOM.viewSetup.classList.toggle('hidden', viewName !== 'setup');
  }
  if (DOM.viewExam) {
    DOM.viewExam.classList.toggle('active', viewName === 'exam');
    DOM.viewExam.classList.toggle('hidden', viewName !== 'exam');
  }
  if (DOM.viewReview) {
    DOM.viewReview.classList.toggle('active', viewName === 'review');
    DOM.viewReview.classList.toggle('hidden', viewName !== 'review');
  }

  if (DOM.sampleTestBanner) {
    const isSampleReview = (viewName === 'review' && Boolean(AppState.isSampleTest) && !AppState.viewingAttemptId);
    DOM.sampleTestBanner.classList.toggle('hidden', !isSampleReview);
  }

  const targetHash = '#' + viewName;
  if (typeof window !== 'undefined' && window.location && window.location.hash !== targetHash && typeof history !== 'undefined' && history.replaceState) {
    history.replaceState(null, '', targetHash);
  }

  renderHeaderNavActions();
  persistAppState();
}

function renderHeaderNavActions() {
  DOM.dynamicNavActions.innerHTML = '';

  if (DOM.headerExamBadge) {
    DOM.headerExamBadge.textContent = '';
    DOM.headerExamBadge.className = 'brand-badge hidden';
  }

  if (AppState.view === 'home') {
    const historyBtn = document.createElement('button');
    historyBtn.className = 'btn btn-outline';
    historyBtn.id = 'btn-header-history';
    historyBtn.textContent = 'History';
    historyBtn.title = 'View Test History';
    historyBtn.onclick = openHistoryView;
    DOM.dynamicNavActions.appendChild(historyBtn);
  } else if (AppState.view === 'setup') {
    const homeBtn = document.createElement('button');
    homeBtn.className = 'btn btn-outline';
    homeBtn.id = 'btn-header-home';
    homeBtn.textContent = 'Home';
    homeBtn.title = 'Return to Home';
    homeBtn.onclick = () => switchView('home');
    DOM.dynamicNavActions.appendChild(homeBtn);

    const historyBtn = document.createElement('button');
    historyBtn.className = 'btn btn-outline';
    historyBtn.id = 'btn-header-history';
    historyBtn.textContent = 'History';
    historyBtn.title = 'View Test History';
    historyBtn.onclick = openHistoryView;
    DOM.dynamicNavActions.appendChild(historyBtn);
  } else if (AppState.view === 'exam') {
    const helpBtn = document.createElement('button');
    helpBtn.className = 'btn btn-outline';
    helpBtn.id = 'btn-keyboard-help';
    helpBtn.textContent = '?';
    helpBtn.title = 'Keyboard Shortcuts (?)';
    helpBtn.onclick = showKeyboardHelpModal;
    DOM.dynamicNavActions.appendChild(helpBtn);

    const exitBtn = document.createElement('button');
    exitBtn.className = 'btn btn-outline btn-exit-test';
    exitBtn.textContent = 'Exit Test';
    exitBtn.onclick = confirmExitTest;
    DOM.dynamicNavActions.appendChild(exitBtn);
  } else if (AppState.view === 'review') {
    const retakeBtn = document.createElement('button');
    retakeBtn.className = 'btn btn-outline';
    retakeBtn.id = 'btn-header-retake';
    retakeBtn.textContent = 'Retake Test';
    retakeBtn.title = 'Retake this test with freshly randomized options';
    retakeBtn.onclick = handleRetakeTest;
    DOM.dynamicNavActions.appendChild(retakeBtn);

    const homeBtn = document.createElement('button');
    homeBtn.className = 'btn btn-primary';
    homeBtn.id = 'btn-header-home';
    homeBtn.textContent = 'Home';
    homeBtn.title = 'Return to Home';
    homeBtn.onclick = handleNewTest;
    DOM.dynamicNavActions.appendChild(homeBtn);
  }
}

function handleNewTest() {
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);
  localStorage.removeItem('triage_exam_session');

  AppState.examData = null;
  AppState.responses = {};
  AppState.sectionTimesLeft = {};
  AppState.sectionStatus = {};
  AppState.activeSectionIndex = 0;
  AppState.activeQuestionIndex = 0;
  AppState.viewingAttemptId = null;
  AppState.reviewActiveQuestionId = null;
  AppState.isSampleTest = false;
  AppState.pendingExamPackage = null;
  AppState.practiceElapsedTime = 0;

  if (DOM.pastAttemptBanner) {
    DOM.pastAttemptBanner.classList.add('hidden');
  }
  if (DOM.sampleTestBanner) {
    DOM.sampleTestBanner.classList.add('hidden');
  }

  const stateRaw = localStorage.getItem('triage_app_state');
  if (stateRaw) {
    try {
      const s = JSON.parse(stateRaw);
      s.view = 'home';
      delete s.reviewExamData;
      delete s.reviewResponses;
      s.viewingAttemptId = null;
      s.isSampleTest = false;
      localStorage.setItem('triage_app_state', JSON.stringify(s));
    } catch (e) {}
  }

  switchView('home');

  updateExamModeUI();
  updateAiConfigSummary();
  updateScopeBadges();
  updateAiSizingBreakdown();
  if (AppState.setupMode === 'manual') {
    if (DOM.jsonTextInput && DOM.jsonTextInput.value.trim()) {
      validateJsonContent(DOM.jsonTextInput.value);
    } else if (DOM.startExamBtn) {
      DOM.startExamBtn.disabled = true;
    }
  }
}

function handleRetakeTest() {
  if (!AppState.examData || !AppState.examData.sections || AppState.examData.sections.length === 0) {
    showToast("No test data available to retake.");
    return;
  }

  const testTitle = AppState.examData.examTitle || (AppState.examMode === 'inicet' ? 'INI-CET CBT Mock Test' : 'NEET-PG CBT Mock Test');
  const msg = `Are you sure you want to retake "${testTitle}"? A fresh test session will begin immediately with newly randomized options.`;

  showModal("Retake Test", msg, () => {
    localStorage.removeItem('triage_exam_session');
    AppState.viewingAttemptId = null;
    if (DOM.pastAttemptBanner) {
      DOM.pastAttemptBanner.classList.add('hidden');
    }
    if (DOM.sampleTestBanner) {
      DOM.sampleTestBanner.classList.add('hidden');
    }
    startExamSession();
  }, true);
}

async function openHistoryView() {
  if (!AppState.sessionHistory || AppState.sessionHistory.length === 0) {
    await loadHistoryFromDB();
  }

  const isFromHome = AppState.view === 'home';

  if (AppState.view !== 'review') {
    switchView('review');
  }

  if ((isFromHome || !AppState.examData) && AppState.sessionHistory && AppState.sessionHistory.length > 0) {
    const latest = AppState.sessionHistory[AppState.sessionHistory.length - 1];
    viewPastAttempt(latest.id);
  }

  switchMasterReviewTab('tab-history');
}

// ==========================================================================
// 8. CBT Question Navigation & Confidence Rating
// ==========================================================================
function getSectionStats(sectionId) {
  const section = AppState.examData.sections.find(s => s.id === sectionId);
  let answered = 0, lowConfidence = 0, notAnswered = 0, notVisited = 0;
  if (section) {
    section.questions.forEach(q => {
      const resp = AppState.responses[q.id];
      if (resp) {
        if (resp.status === 'answered') answered++;
        else if (resp.status === 'low_confidence') lowConfidence++;
        else if (resp.status === 'not_answered') notAnswered++;
        else notVisited++;
      }
    });
  }
  return { answered, lowConfidence, notAnswered, notVisited };
}

function renderSectionTabs() {
  DOM.sectionsBar.innerHTML = '';
  AppState.examData.sections.forEach((sec, idx) => {
    const btn = document.createElement('button');
    const isSubmitted = AppState.sectionStatus[sec.id] === 'submitted';
    const isActive = idx === AppState.activeSectionIndex;

    btn.className = `sec-tab-btn ${isActive ? 'active' : ''} ${isSubmitted ? 'submitted' : ''}`;
    
    const stats = getSectionStats(sec.id);
    btn.title = `${sec.name}: ${stats.answered} Answered, ${stats.lowConfidence} Low Confidence, ${stats.notAnswered} Not Answered`;
    btn.innerHTML = `
      <span>${sec.name}</span>
      <div class="sec-tooltip">
        <div class="tooltip-title">${sec.name}</div>
        <div class="tooltip-row">
          <span class="legend-box status-answered">${stats.answered}</span>
          <span class="legend-text">Answered</span>
        </div>
        <div class="tooltip-row">
          <span class="legend-box status-low-confidence">${stats.lowConfidence}</span>
          <span class="legend-text">Low Confidence</span>
        </div>
        <div class="tooltip-row">
          <span class="legend-box status-not-answered">${stats.notAnswered}</span>
          <span class="legend-text">Not Answered</span>
        </div>
        <div class="tooltip-row">
          <span class="legend-box status-not-visited">${stats.notVisited}</span>
          <span class="legend-text">Not Visited</span>
        </div>
      </div>
    `;

    btn.onclick = () => {
      if (isSubmitted) {
        showNoticeModal("Section Locked", "This section has been submitted and locked under CBT regulations.");
        return;
      }
      if (idx !== AppState.activeSectionIndex) {
        if (AppState.sessionMode === 'practice') {
          AppState.activeSectionIndex = idx;
          AppState.activeQuestionIndex = 0;
          renderSectionTabs();
          loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
          return;
        }
        showNoticeModal("Section Lock Notice", "In accordance with CBT regulations, candidates cannot advance to subsequent sections without submitting the current section.");
      }
    };

    function positionSectionTooltip() {
      const tooltip = btn.querySelector('.sec-tooltip');
      if (tooltip) {
        const rect = btn.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom + 4}px`;
        const leftCoord = Math.max(8, Math.min(rect.left, window.innerWidth - 185));
        tooltip.style.left = `${leftCoord}px`;
      }
    }

    btn.addEventListener('mouseenter', positionSectionTooltip);
    btn.addEventListener('focus', positionSectionTooltip);

    DOM.sectionsBar.appendChild(btn);
  });

  // Auto-scroll active section tab into view within the track without moving the window
  requestAnimationFrame(() => {
    const activeBtn = DOM.sectionsBar.querySelector('.sec-tab-btn.active');
    if (activeBtn) {
      const track = DOM.sectionsBar;
      const trackRect = track.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      if (btnRect.left < trackRect.left || btnRect.right > trackRect.right) {
        const scrollLeft = activeBtn.offsetLeft - (track.clientWidth / 2) + (activeBtn.clientWidth / 2);
        track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  });
}

function loadQuestion(secIdx, qIdx) {
  AppState.activeSectionIndex = secIdx;
  AppState.activeQuestionIndex = qIdx;
  const currentSec = AppState.examData.sections[secIdx];
  const question = currentSec.questions[qIdx];
  const resp = AppState.responses[question.id];

  resp.bookmarked = resp.bookmarked !== undefined ? resp.bookmarked : (resp.marked || false);

  if (resp.status === 'not_visited') {
    resp.status = 'not_answered';
  }
  persistExamState();

  DOM.examQNumber.textContent = `Question No. ${qIdx + 1} of ${currentSec.questions.length}`;
  DOM.examQText.textContent = question.text;

  // Render Bookmark button state
  if (DOM.btnBookmarkToggle) {
    DOM.btnBookmarkToggle.classList.toggle('active', !!resp.bookmarked);
    DOM.btnBookmarkToggle.textContent = resp.bookmarked ? 'Bookmarked' : 'Bookmark';
  }

  // Render Options (85/15 dual-action rows)
  DOM.examOptionsList.innerHTML = '';
  question.options.forEach((optText, optIdx) => {
    const isSelected = resp.selectedOption === optIdx;
    const letter = String.fromCharCode(65 + optIdx);
    const confClass = isSelected ? (resp.confidence === 'not_sure' ? 'confidence-not-sure' : 'confidence-sure') : '';

    const row = document.createElement('div');
    row.className = `option-row ${isSelected ? 'selected ' + confClass : ''}`;
    row.setAttribute('data-opt-index', optIdx);

    row.innerHTML = `
      <div class="option-main" role="button" tabindex="0" aria-label="Select option ${letter} confidently: ${optText}">
        <div class="option-box-custom"></div>
        <span class="option-label"><strong>${letter}.</strong> ${optText}</span>
      </div>
      <div class="option-confidence-zone" role="button" tabindex="0" aria-label="Select option ${letter} with low confidence" title="Low confidence (?)">
        <span class="doubt-symbol">?</span>
      </div>
    `;

    const mainZone = row.querySelector('.option-main');
    const doubtZone = row.querySelector('.option-confidence-zone');

    mainZone.onclick = (e) => {
      e.stopPropagation();
      handleOptionConfidentClick(question.id, optIdx);
    };
    mainZone.onkeydown = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        handleOptionConfidentClick(question.id, optIdx);
      }
    };

    doubtZone.onclick = (e) => {
      e.stopPropagation();
      handleOptionDoubtClick(question.id, optIdx);
    };
    doubtZone.onkeydown = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        handleOptionDoubtClick(question.id, optIdx);
      }
    };

    DOM.examOptionsList.appendChild(row);
  });

  const isLastSection = secIdx === AppState.examData.sections.length - 1;
  DOM.btnSubmitSection.textContent = isLastSection ? 'Submit Test' : 'Submit Section';

  if (DOM.timerSecLabel) {
    const isPractice = AppState.sessionMode === 'practice' || (currentSec && currentSec.id === 'sec_practice');
    DOM.timerSecLabel.textContent = isPractice ? 'TIME ELAPSED' : (currentSec ? currentSec.name : 'Section');
  }

  updatePaletteGrid();
  updatePaletteSummaryCounters();
  renderSectionTabs();
  persistExamState();
}

function selectOption(qId, optIdx, confidence = 'sure') {
  const resp = AppState.responses[qId];
  if (resp.selectedOption !== null && resp.selectedOption !== optIdx) {
    resp.switchCount = (resp.switchCount || 0) + 1;
    resp.switchHistory.push({ from: resp.selectedOption, to: optIdx, timestamp: Date.now() });
  }

  resp.selectedOption = optIdx;
  resp.confidence = confidence;
  resp.status = confidence === 'not_sure' ? 'low_confidence' : 'answered';

  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
}

function handleOptionConfidentClick(qId, optIdx) {
  selectOption(qId, optIdx, 'sure');
}

function handleOptionDoubtClick(qId, optIdx) {
  const resp = AppState.responses[qId];
  if (resp.selectedOption === optIdx && resp.confidence === 'not_sure') {
    selectOption(qId, optIdx, 'sure');
  } else {
    selectOption(qId, optIdx, 'not_sure');
  }
}

function toggleConfidenceKeyboard() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  const question = curSec.questions[AppState.activeQuestionIndex];
  const resp = AppState.responses[question.id];

  // Strictly only allowed when question is answered
  if (resp.selectedOption === null) return;

  resp.confidence = resp.confidence === 'not_sure' ? 'sure' : 'not_sure';
  resp.status = resp.confidence === 'not_sure' ? 'low_confidence' : 'answered';

  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
}

function toggleBookmark() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  const question = curSec.questions[AppState.activeQuestionIndex];
  const resp = AppState.responses[question.id];

  resp.bookmarked = !resp.bookmarked;
  resp.marked = resp.bookmarked;

  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
}

function handleSaveAndNext() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  const question = curSec.questions[AppState.activeQuestionIndex];
  const resp = AppState.responses[question.id];

  if (resp.selectedOption !== null) {
    if (!resp.confidence) {
      resp.confidence = 'sure';
    }
    resp.status = resp.confidence === 'not_sure' ? 'low_confidence' : 'answered';
  } else {
    resp.confidence = null;
    resp.status = 'not_answered';
  }

  AppState.activeQuestionIndex = (AppState.activeQuestionIndex + 1) % curSec.questions.length;
  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
}

function handleClearResponse() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  const question = curSec.questions[AppState.activeQuestionIndex];
  const resp = AppState.responses[question.id];

  resp.selectedOption = null;
  resp.confidence = null;
  resp.status = 'not_answered';

  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
}

function handlePreviousQuestion() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  if (AppState.activeQuestionIndex > 0) {
    AppState.activeQuestionIndex--;
  } else {
    AppState.activeQuestionIndex = curSec.questions.length - 1;
  }
  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
}

function showKeyboardHelpModal() {
  const html = `
    <div class="kbd-help-grid">
      <div class="kbd-row"><div class="kbd-keys"><kbd>J</kbd> <kbd>K</kbd> <kbd>L</kbd> <kbd>;</kbd></div><span class="kbd-desc">Select Options A, B, C, D (Default Confident)</span></div>
      <div class="kbd-row"><div class="kbd-keys"><kbd>Tab</kbd></div><span class="kbd-desc">Toggle Confidence (Answered questions only)</span></div>
      <div class="kbd-row"><div class="kbd-keys"><kbd>B</kbd></div><span class="kbd-desc">Toggle Bookmark</span></div>
      <div class="kbd-row"><div class="kbd-keys"><kbd>Enter</kbd></div><span class="kbd-desc">Save &amp; Next</span></div>
      <div class="kbd-row"><div class="kbd-keys"><kbd>Shift</kbd> + <kbd>Enter</kbd></div><span class="kbd-desc">Submit Section / Test</span></div>
      <div class="kbd-row"><div class="kbd-keys"><kbd>P</kbd> / <kbd>&larr;</kbd></div><span class="kbd-desc">Previous Question</span></div>
      <div class="kbd-row"><div class="kbd-keys"><kbd>Backspace</kbd> / <kbd>Delete</kbd></div><span class="kbd-desc">Clear Response</span></div>
      <div class="kbd-row"><div class="kbd-keys"><kbd>?</kbd></div><span class="kbd-desc">Toggle this Keyboard Help</span></div>
    </div>
  `;
  showModal("Keyboard Shortcuts", html, null, false);
}

function handleGlobalKeyDown(e) {
  // Ignore shortcuts when actively typing in visible inputs or textareas
  if (e.target && ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
    if (e.target.closest('.hidden') || e.target.offsetParent === null) {
      e.target.blur();
    } else {
      return;
    }
  }

  // Handle modal escape and enter
  if (DOM.modalContainer && !DOM.modalContainer.classList.contains('hidden')) {
    if (e.key === 'Escape') {
      e.preventDefault();
      DOM.modalContainer.classList.add('hidden');
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (DOM.modalBtnConfirm) DOM.modalBtnConfirm.click();
    }
    return;
  }

  // Question Review keyboard navigation
  if (AppState.view === 'review') {
    if (AppState.reviewActiveTab === 'tab-question-review') {
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'k') {
        e.preventDefault();
        handleReviewPrevQuestion();
      } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'j') {
        e.preventDefault();
        handleReviewNextQuestion();
      }
    }
    return;
  }

  // Exam view keyboard navigation
  if (AppState.view === 'exam') {
    if (e.key === '?' || (e.shiftKey && e.key === '/')) {
      e.preventDefault();
      showKeyboardHelpModal();
      return;
    }

    // Ergonomic home-row shortcuts: J, K, L, ; (Options A, B, C, D) + numeric fallback 1, 2, 3, 4
    let optIdx = -1;
    const keyLower = e.key ? e.key.toLowerCase() : '';
    if (keyLower === 'j' || e.code === 'KeyJ' || e.keyCode === 74) {
      optIdx = 0;
    } else if (keyLower === 'k' || e.code === 'KeyK' || e.keyCode === 75) {
      optIdx = 1;
    } else if (keyLower === 'l' || e.code === 'KeyL' || e.keyCode === 76) {
      optIdx = 2;
    } else if (e.key === ';' || e.key === ':' || e.code === 'Semicolon' || e.keyCode === 186 || e.keyCode === 59) {
      optIdx = 3;
    } else if (['1', '2', '3', '4'].includes(e.key)) {
      optIdx = parseInt(e.key, 10) - 1;
    } else if (e.code && ['Digit1', 'Digit2', 'Digit3', 'Digit4'].includes(e.code)) {
      optIdx = parseInt(e.code.replace('Digit', ''), 10) - 1;
    } else if (e.code && ['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4'].includes(e.code)) {
      optIdx = parseInt(e.code.replace('Numpad', ''), 10) - 1;
    } else if (typeof e.keyCode === 'number' && e.keyCode >= 49 && e.keyCode <= 52) {
      optIdx = e.keyCode - 49;
    } else if (typeof e.keyCode === 'number' && e.keyCode >= 97 && e.keyCode <= 100) {
      optIdx = e.keyCode - 97;
    }

    if (optIdx >= 0 && optIdx <= 3) {
      e.preventDefault();
      const curSec = AppState.examData && AppState.examData.sections && AppState.examData.sections[AppState.activeSectionIndex];
      const curQ = curSec && curSec.questions && curSec.questions[AppState.activeQuestionIndex];
      if (curQ && curQ.options && optIdx < curQ.options.length) {
        selectOption(curQ.id, optIdx, 'sure');
      }
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      toggleConfidenceKeyboard();
      return;
    }

    if (e.key.toLowerCase() === 'b') {
      e.preventDefault();
      toggleBookmark();
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.shiftKey) {
        confirmSubmitSection(false);
        return;
      }
      handleSaveAndNext();
      return;
    }

    if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
      e.preventDefault();
      handlePreviousQuestion();
      return;
    }

    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault();
      handleClearResponse();
      return;
    }
  }
}

function updatePaletteGrid() {
  DOM.examPaletteGrid.innerHTML = '';
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];

  curSec.questions.forEach((q, idx) => {
    const resp = AppState.responses[q.id];
    const btn = document.createElement('button');
    btn.className = `palette-btn status-${getPaletteStatusClass(resp.status)} ${idx === AppState.activeQuestionIndex ? 'active-q' : ''}`;
    btn.textContent = idx + 1;

    if (resp.bookmarked) {
      const pip = document.createElement('span');
      pip.className = 'palette-bookmark-pip';
      pip.title = 'Bookmarked';
      btn.appendChild(pip);
    }

    btn.onclick = () => {
      AppState.activeQuestionIndex = idx;
      loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
      if (window.innerWidth <= 768) {
        DOM.examProgressSidebar.classList.remove('drawer-open');
      }
    };
    DOM.examPaletteGrid.appendChild(btn);
  });
}

function getPaletteStatusClass(status) {
  switch (status) {
    case 'answered': return 'answered';
    case 'low_confidence': return 'low-confidence';
    case 'not_answered': return 'not-answered';
    default: return 'not-visited';
  }
}

function updatePaletteSummaryCounters() {
  let ans = 0, lowConf = 0, notAns = 0, notVis = 0;
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];

  curSec.questions.forEach(q => {
    const resp = AppState.responses[q.id];
    if (resp.status === 'answered') ans++;
    else if (resp.status === 'low_confidence') lowConf++;
    else if (resp.status === 'not_answered') notAns++;
    else notVis++;
  });

  DOM.countAnswered.textContent = ans;
  if (DOM.countLowConfidence) DOM.countLowConfidence.textContent = lowConf;
  DOM.countNotAnswered.textContent = notAns;
  DOM.countNotVisited.textContent = notVis;
}

// ==========================================================================
// 9. Section Timers & Strict CBT Auto-Submission
// ==========================================================================
function startActiveSectionTimer() {
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);

  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  if (!curSec) return;
  const activeSecId = curSec.id;
  const isPractice = AppState.sessionMode === 'practice';

  if (isPractice) {
    AppState.practiceElapsedTime = AppState.practiceElapsedTime || 0;
    updateTimerDisplay(AppState.practiceElapsedTime, true);

    AppState.timerInterval = setInterval(() => {
      if (!AppState.examData || !AppState.examData.sections) return;
      AppState.practiceElapsedTime++;

      const activeSection = AppState.examData.sections[AppState.activeSectionIndex];
      const curQ = activeSection && activeSection.questions ? activeSection.questions[AppState.activeQuestionIndex] : null;
      if (curQ && AppState.responses[curQ.id]) {
        AppState.responses[curQ.id].timeSpent = (AppState.responses[curQ.id].timeSpent || 0) + 1;
      }

      updateTimerDisplay(AppState.practiceElapsedTime, true);
      if (AppState.practiceElapsedTime % 10 === 0) persistExamState();
    }, 1000);
  } else {
    // Exam mode countdown
    updateTimerDisplay(AppState.sectionTimesLeft[activeSecId], false);

    AppState.timerInterval = setInterval(() => {
      if (!AppState.examData || !AppState.examData.sections) return;
      if (AppState.sectionTimesLeft[activeSecId] > 0) {
        AppState.sectionTimesLeft[activeSecId]--;

        const activeSection = AppState.examData.sections[AppState.activeSectionIndex];
        const curQ = activeSection && activeSection.questions ? activeSection.questions[AppState.activeQuestionIndex] : null;
        if (curQ && AppState.responses[curQ.id]) {
          AppState.responses[curQ.id].timeSpent = (AppState.responses[curQ.id].timeSpent || 0) + 1;
        }

        updateTimerDisplay(AppState.sectionTimesLeft[activeSecId], false);
        if (AppState.sectionTimesLeft[activeSecId] % 10 === 0) persistExamState();
      } else {
        clearInterval(AppState.timerInterval);
        handleSectionAutoSubmit();
      }
    }, 1000);
  }
}

function updatePaletteToggleState(seconds, isElapsed = false) {
  if (!DOM.btnPaletteNavToggle) return;
  const isDrawerOpen = DOM.examProgressSidebar && DOM.examProgressSidebar.classList.contains('drawer-open');
  DOM.btnPaletteNavToggle.classList.toggle('active', Boolean(isDrawerOpen));
  DOM.btnPaletteNavToggle.setAttribute('aria-expanded', isDrawerOpen ? 'true' : 'false');

  if (isDrawerOpen) {
    DOM.btnPaletteNavToggle.innerHTML = `<span>Palette</span>`;
    DOM.btnPaletteNavToggle.setAttribute('aria-label', 'Close Question Palette');
    DOM.btnPaletteNavToggle.classList.remove('timer-warning', 'timer-critical');
  } else {
    // When collapsed, display the timer instead of "palette" (strictly no icons/glyphs)
    let secVal = seconds;
    if (secVal === undefined) {
      if (AppState.sessionMode === 'practice') {
        secVal = AppState.practiceElapsedTime || 0;
      } else {
        const activeSec = AppState.examData && AppState.examData.sections && AppState.examData.sections[AppState.activeSectionIndex];
        secVal = activeSec && AppState.sectionTimesLeft ? AppState.sectionTimesLeft[activeSec.id] : 0;
      }
    }
    const h = String(Math.floor(secVal / 3600)).padStart(2, '0');
    const m = String(Math.floor((secVal % 3600) / 60)).padStart(2, '0');
    const s = String(secVal % 60).padStart(2, '0');
    DOM.btnPaletteNavToggle.innerHTML = `<span class="timer-digits">${h}:${m}:${s}</span>`;

    if (isElapsed) {
      DOM.btnPaletteNavToggle.setAttribute('aria-label', `Time Elapsed: ${h}:${m}:${s}. Tap to toggle Question Palette`);
      DOM.btnPaletteNavToggle.classList.remove('timer-warning', 'timer-critical');
    } else {
      DOM.btnPaletteNavToggle.setAttribute('aria-label', `Section Time Remaining: ${h}:${m}:${s}. Tap to toggle Question Palette`);
      if (secVal <= 60) {
        DOM.btnPaletteNavToggle.classList.add('timer-critical');
        DOM.btnPaletteNavToggle.classList.remove('timer-warning');
      } else if (secVal <= 300) {
        DOM.btnPaletteNavToggle.classList.add('timer-warning');
        DOM.btnPaletteNavToggle.classList.remove('timer-critical');
      } else {
        DOM.btnPaletteNavToggle.classList.remove('timer-warning', 'timer-critical');
      }
    }
  }
}

function updateTimerDisplay(seconds, isElapsed = false) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  
  if (DOM.timerSecLabel) {
    if (isElapsed || AppState.sessionMode === 'practice') {
      DOM.timerSecLabel.textContent = 'TIME ELAPSED';
    } else {
      const activeSec = (AppState.examData && AppState.examData.sections) ? AppState.examData.sections[AppState.activeSectionIndex] : null;
      DOM.timerSecLabel.textContent = activeSec ? activeSec.name : 'TIME REMAINING';
    }
  }

  if (DOM.sectionClockDisplay) {
    DOM.sectionClockDisplay.textContent = `${h}:${m}:${s}`;
    if (isElapsed) {
      DOM.sectionClockDisplay.classList.remove('timer-warning', 'timer-critical');
    } else {
      if (seconds <= 60) {
        DOM.sectionClockDisplay.classList.add('timer-critical');
        DOM.sectionClockDisplay.classList.remove('timer-warning');
      } else if (seconds <= 300) {
        DOM.sectionClockDisplay.classList.add('timer-warning');
        DOM.sectionClockDisplay.classList.remove('timer-critical');
      } else {
        DOM.sectionClockDisplay.classList.remove('timer-warning', 'timer-critical');
      }
    }
  }

  // When collapsed, display the timer on the toggle button instead of "palette"
  updatePaletteToggleState(seconds, isElapsed);
}

function handleSectionAutoSubmit() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  const isLast = AppState.activeSectionIndex === AppState.examData.sections.length - 1;

  if (isLast) {
    showToast("Test time elapsed. Submitting test...", 2500);
    executeSectionSubmission();
  } else {
    const nextSec = AppState.examData.sections[AppState.activeSectionIndex + 1];
    showToast(`${curSec.name} time elapsed. Advancing to ${nextSec.name}...`, 2500);
    executeSectionSubmission();
  }
}

function confirmSubmitSection(isAuto) {
  const isLast = AppState.activeSectionIndex === AppState.examData.sections.length - 1;
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  const stats = getSectionStats(curSec.id);

  const title = isLast ? "Submit Complete Test?" : `Submit ${curSec.name}?`;
  const promptMsg = isLast
    ? "Are you sure you want to finish and submit the test? All responses will be locked for final evaluation."
    : "Once submitted, this section cannot be reopened under CBT regulations. Do you wish to continue?";

  const summaryHtml = `
    <div class="modal-summary-grid">
      <div class="modal-summary-row">
        <span class="modal-summary-label">Section</span>
        <span class="modal-summary-value">${curSec.name}</span>
      </div>
      <div class="modal-summary-row">
        <span class="modal-summary-label">Total Questions</span>
        <span class="modal-summary-value">${curSec.questions.length}</span>
      </div>
      <div class="modal-summary-row">
        <span class="modal-summary-label">Answered (Confident)</span>
        <span class="modal-summary-value" style="color: var(--pastel-green);">${stats.answered}</span>
      </div>
      <div class="modal-summary-row">
        <span class="modal-summary-label">Low Confidence</span>
        <span class="modal-summary-value" style="color: var(--pastel-amber);">${stats.lowConfidence}</span>
      </div>
      <div class="modal-summary-row">
        <span class="modal-summary-label">Not Answered / Unvisited</span>
        <span class="modal-summary-value" style="color: var(--pastel-red);">${stats.notAnswered + stats.notVisited}</span>
      </div>
    </div>
    <p>${promptMsg}</p>
  `;

  showModal(title, summaryHtml, () => executeSectionSubmission());
}

function executeSectionSubmission() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  AppState.sectionStatus[curSec.id] = 'submitted';

  if (AppState.activeSectionIndex < AppState.examData.sections.length - 1) {
    AppState.activeSectionIndex++;
    AppState.activeQuestionIndex = 0;
    renderSectionTabs();
    loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
    startActiveSectionTimer();
  } else {
    if (AppState.timerInterval) clearInterval(AppState.timerInterval);
    finishTestAndShowAnalytics();
  }
}

function confirmExitTest(onCancelCallback = null) {
  showModal(
    "Exit Test",
    "Are you sure you want to exit? Your current test progress will be discarded and you will return to the home screen.",
    () => {
      if (AppState.timerInterval) clearInterval(AppState.timerInterval);
      localStorage.removeItem('triage_exam_session');
      AppState.examData = null;
      AppState.responses = {};
      AppState.sectionTimesLeft = {};
      AppState.sectionStatus = {};
      AppState.viewingAttemptId = null;
      AppState.reviewActiveQuestionId = null;
      if (DOM.pastAttemptBanner) {
        DOM.pastAttemptBanner.classList.add('hidden');
      }
      if (DOM.sampleTestBanner) {
        DOM.sampleTestBanner.classList.add('hidden');
      }
      switchView('home');
      DOM.startExamBtn.disabled = true;
      if (DOM.jsonTextInput.value.trim()) {
        validateJsonContent(DOM.jsonTextInput.value);
      }
    },
    true,
    onCancelCallback
  );
}

// ==========================================================================
// 10. Performance Evaluation & Triage Matrix Engine
// ==========================================================================
function finishTestAndShowAnalytics() {
  localStorage.removeItem('triage_exam_session');
  recordCurrentAttempt();
  AppState.viewingAttemptId = null;
  DOM.pastAttemptBanner.classList.add('hidden');

  switchView('review');
  switchMasterReviewTab('tab-question-review');

  populateFilterDropdowns();
  calculateAndRenderKPIs();
  calculateAndRenderTriageMatrix();
  renderFilteredReviewQuestions();
  updateResetFilterState();
}

function calculateAndRenderKPIs() {
  if (!AppState.examData) return;
  const scheme = AppState.examData.markingScheme || { correct: 4, incorrect: -1, unattempted: 0 };
  let correct = 0, incorrect = 0, unattempted = 0, totalQuestions = 0;

  AppState.examData.sections.forEach(sec => {
    sec.questions.forEach(q => {
      totalQuestions++;
      const resp = AppState.responses[q.id];
      if (!resp || resp.selectedOption === null || resp.selectedOption === undefined) {
        unattempted++;
      } else if (resp.selectedOption === q.correctAnswerIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });
  });

  const totalScore = (correct * scheme.correct) + (incorrect * scheme.incorrect) + (unattempted * scheme.unattempted);
  const maxScore = totalQuestions * scheme.correct;
  const accuracy = (correct + incorrect) > 0 ? ((correct / (correct + incorrect)) * 100).toFixed(1) : "0.0";
  const attemptRate = totalQuestions > 0 ? (((correct + incorrect) / totalQuestions) * 100).toFixed(1) : "0.0";

  // Score display (round to 2 decimals if non-integer)
  DOM.kpiTotalScore.textContent = Number.isInteger(totalScore) ? totalScore : totalScore.toFixed(2);
  DOM.kpiMaxScore.textContent = `Max: ${Number.isInteger(maxScore) ? maxScore : maxScore.toFixed(2)}`;
  DOM.kpiCorrectCount.textContent = correct;
  DOM.kpiCorrectScore.textContent = `+${(correct * scheme.correct).toFixed(Number.isInteger(scheme.correct) ? 0 : 2)} Marks`;
  DOM.kpiIncorrectCount.textContent = incorrect;
  DOM.kpiIncorrectScore.textContent = `${(incorrect * scheme.incorrect).toFixed(Number.isInteger(scheme.incorrect) ? 0 : 2)} Marks`;
  DOM.kpiUnattemptedCount.textContent = unattempted;
  DOM.kpiUnattemptedRate.textContent = `${((unattempted / totalQuestions) * 100).toFixed(1)}% of Test`;
  DOM.kpiAccuracyPct.textContent = `${accuracy}%`;
  DOM.kpiAttemptRate.textContent = `Attempt Rate: ${attemptRate}%`;
}

/**
 * Categorize a question outcome into the 4 Triage Matrix quadrants
 */
function getQuestionQuadrant(q, resp) {
  const isAttempted = resp && resp.selectedOption !== null && resp.selectedOption !== undefined;
  const isCorrect = isAttempted && resp.selectedOption === q.correctAnswerIndex;
  const isSure = resp && resp.confidence === 'sure';

  if (isCorrect && isSure) {
    return 'mastered';
  } else if (!isCorrect && isAttempted && isSure) {
    return 'silly_mistake';
  } else if (isCorrect && !isSure) {
    return 'lucky_guesses';
  } else {
    // Incorrect or unattempted AND not sure (or unstated)
    return 'knowledge_gaps';
  }
}

function calculateAndRenderTriageMatrix() {
  if (!AppState.examData) return;
  let mastered = 0, silly = 0, lucky = 0, gaps = 0, total = 0;
  const subjectMatrixMap = {};

  MBBS_SUBJECTS_LIST.forEach(s => {
    subjectMatrixMap[s] = { mastered: 0, silly: 0, lucky: 0, gaps: 0, total: 0 };
  });

  AppState.examData.sections.forEach(sec => {
    sec.questions.forEach(q => {
      total++;
      const resp = AppState.responses[q.id] || {};
      const quad = getQuestionQuadrant(q, resp);

      if (quad === 'mastered') mastered++;
      else if (quad === 'silly_mistake') silly++;
      else if (quad === 'lucky_guesses') lucky++;
      else gaps++;

      const subjects = normalizeToArray(q.subject).map(s => normalizeSubject(s));
      subjects.forEach(subj => {
        if (!subjectMatrixMap[subj]) {
          subjectMatrixMap[subj] = { mastered: 0, silly: 0, lucky: 0, gaps: 0, total: 0 };
        }
        subjectMatrixMap[subj][quad === 'mastered' ? 'mastered' : quad === 'silly_mistake' ? 'silly' : quad === 'lucky_guesses' ? 'lucky' : 'gaps']++;
        subjectMatrixMap[subj].total++;
      });
    });
  });

  const pct = (cnt) => total > 0 ? `(${((cnt / total) * 100).toFixed(1)}%)` : '(0%)';

  DOM.countMastered.textContent = mastered;
  DOM.pctMastered.textContent = pct(mastered);

  DOM.countSilly.textContent = silly;
  DOM.pctSilly.textContent = pct(silly);

  DOM.countLucky.textContent = lucky;
  DOM.pctLucky.textContent = pct(lucky);

  DOM.countGaps.textContent = gaps;
  DOM.pctGaps.textContent = pct(gaps);

  // Render Subject Matrix Table
  const tbody = DOM.matrixSubjectTable.querySelector('tbody');
  tbody.innerHTML = '';

  Object.entries(subjectMatrixMap)
    .filter(([_, data]) => data.total > 0)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([subj, data]) => {
      const tr = document.createElement('tr');
      tr.className = 'clickable-row';
      tr.innerHTML = `
        <td class="bold-text">${subj}</td>
        <td style="color: var(--pastel-green)">${data.mastered}</td>
        <td style="color: var(--pastel-red)">${data.silly}</td>
        <td style="color: var(--pastel-amber)">${data.lucky}</td>
        <td style="color: var(--pastel-purple)">${data.gaps}</td>
        <td><strong>${data.total}</strong></td>
        <td class="donut-cell">${createMatrixDonutSvg(data.mastered, data.silly, data.lucky, data.gaps, data.total)}</td>
      `;
      tr.onclick = () => filterReviewByTag('subject', subj);
      tbody.appendChild(tr);
    });
}

function filterReviewByQuadrant(quadrant) {
  DOM.filterMatrix.value = quadrant;
  switchMasterReviewTab('tab-question-review');
  applyFiltersFromDropdowns();
}

// ==========================================================================
// 11. Question Review & Filter System
// ==========================================================================
function populateFilterDropdowns() {
  if (!AppState.examData) return;
  const sections = new Set();
  const subjects = new Set();
  const systems = new Set();
  const difficulties = new Set();
  const formats = new Set();

  AppState.examData.sections.forEach(sec => {
    sections.add(sec.name);
    sec.questions.forEach(q => {
      normalizeToArray(q.subject).forEach(s => subjects.add(normalizeSubject(s)));
      normalizeToArray(q.system).forEach(sys => systems.add(normalizeSystem(sys)));
      if (q.difficulty) difficulties.add(q.difficulty);
      if (q.format) formats.add(q.format);
    });
  });

  fillSelect(DOM.filterSection, Array.from(sections));
  fillSelect(DOM.filterSubject, Array.from(subjects).sort((a, b) => a.localeCompare(b)));
  fillSelect(DOM.filterSystem, Array.from(systems).sort((a, b) => a.localeCompare(b)));
  fillSelect(DOM.filterDifficulty, Array.from(difficulties));
  if (DOM.filterFormat) fillSelect(DOM.filterFormat, Array.from(formats).sort((a, b) => a.localeCompare(b)));
}

function fillSelect(selectElement, setValues) {
  selectElement.innerHTML = selectElement.options[0].outerHTML;
  setValues.forEach(val => {
    const opt = document.createElement('option');
    opt.value = val;
    opt.textContent = val;
    selectElement.appendChild(opt);
  });
}

function applyFiltersFromDropdowns() {
  AppState.reviewFilters.matrix = DOM.filterMatrix.value;
  AppState.reviewFilters.result = DOM.filterResult.value;
  AppState.reviewFilters.confidence = DOM.filterConfidence.value;
  AppState.reviewFilters.bookmark = DOM.filterBookmark ? DOM.filterBookmark.value : 'all';
  AppState.reviewFilters.section = DOM.filterSection.value;
  AppState.reviewFilters.subject = DOM.filterSubject.value;
  AppState.reviewFilters.system = DOM.filterSystem.value;
  AppState.reviewFilters.difficulty = DOM.filterDifficulty.value;
  AppState.reviewFilters.format = DOM.filterFormat ? DOM.filterFormat.value : 'all';

  updateFilterHighlights();
  updateResetFilterState();

  // Auto-switch to Question Review tab when a filter is applied
  if (AppState.reviewMasterTab !== 'tab-question-review' || AppState.reviewActiveTab !== 'tab-question-review') {
    switchMasterReviewTab('tab-question-review');
  }

  renderFilteredReviewQuestions();
  persistAppState();
}

function updateFilterHighlights() {
  const filters = [
    { el: DOM.filterMatrix, key: 'matrix' },
    { el: DOM.filterResult, key: 'result' },
    { el: DOM.filterConfidence, key: 'confidence' },
    { el: DOM.filterBookmark, key: 'bookmark' },
    { el: DOM.filterSection, key: 'section' },
    { el: DOM.filterSubject, key: 'subject' },
    { el: DOM.filterSystem, key: 'system' },
    { el: DOM.filterDifficulty, key: 'difficulty' },
    { el: DOM.filterFormat, key: 'format' }
  ];

  filters.forEach(({ el, key }) => {
    if (el) {
      el.classList.toggle('filter-active', AppState.reviewFilters[key] !== 'all');
    }
  });
}

function updateResetFilterState() {
  const hasActive = Object.values(AppState.reviewFilters).some(v => v !== 'all');
  DOM.btnResetFilters.disabled = !hasActive;
}

function resetReviewFilters() {
  DOM.filterMatrix.value = 'all';
  DOM.filterResult.value = 'all';
  DOM.filterConfidence.value = 'all';
  if (DOM.filterBookmark) DOM.filterBookmark.value = 'all';
  DOM.filterSection.value = 'all';
  DOM.filterSubject.value = 'all';
  DOM.filterSystem.value = 'all';
  DOM.filterDifficulty.value = 'all';
  if (DOM.filterFormat) DOM.filterFormat.value = 'all';
  applyFiltersFromDropdowns();
}

function getFilteredQuestionsList() {
  if (!AppState.examData) return [];
  const list = [];
  AppState.examData.sections.forEach(sec => {
    sec.questions.forEach((q, idx) => {
      const resp = AppState.responses[q.id] || {};
      const isAttempted = resp.selectedOption !== null && resp.selectedOption !== undefined;
      const isCorrect = isAttempted && resp.selectedOption === q.correctAnswerIndex;
      const isUnattempted = !isAttempted;
      const isIncorrect = isAttempted && !isCorrect;
      const quadrant = getQuestionQuadrant(q, resp);

      const qSubjects = normalizeToArray(q.subject).map(s => normalizeSubject(s));
      const qSystems = normalizeToArray(q.system).map(s => normalizeSystem(s));

      // Filters
      if (AppState.reviewFilters.matrix !== 'all' && quadrant !== AppState.reviewFilters.matrix) return;
      if (AppState.reviewFilters.section !== 'all' && sec.name !== AppState.reviewFilters.section) return;
      if (AppState.reviewFilters.subject !== 'all' && !qSubjects.includes(AppState.reviewFilters.subject)) return;
      if (AppState.reviewFilters.system !== 'all' && !qSystems.includes(AppState.reviewFilters.system)) return;
      if (AppState.reviewFilters.difficulty !== 'all' && q.difficulty !== AppState.reviewFilters.difficulty) return;
      if (AppState.reviewFilters.format !== 'all' && q.format !== AppState.reviewFilters.format) return;

      if (AppState.reviewFilters.result === 'correct' && !isCorrect) return;
      if (AppState.reviewFilters.result === 'incorrect' && !isIncorrect) return;
      if (AppState.reviewFilters.result === 'unattempted' && !isUnattempted) return;

      if (AppState.reviewFilters.confidence === 'sure' && resp.confidence !== 'sure') return;
      if (AppState.reviewFilters.confidence === 'not_sure' && resp.confidence !== 'not_sure') return;

      if (AppState.reviewFilters.bookmark === 'bookmarked' && !resp.bookmarked && !resp.marked) return;
      if (AppState.reviewFilters.bookmark === 'unbookmarked' && (resp.bookmarked || resp.marked)) return;

      list.push({ question: q, section: sec, indexInSection: idx + 1, isCorrect, isIncorrect, isUnattempted, quadrant, resp });
    });
  });
  return list;
}

function renderFilteredReviewQuestions() {
  const filtered = getFilteredQuestionsList();
  DOM.filteredCountDisplay.textContent = filtered.length;
  DOM.reviewMiniPalette.innerHTML = '';

  if (filtered.length === 0) {
    DOM.reviewQNum.textContent = "No Questions Match Selected Filter";
    DOM.reviewQText.textContent = "Adjust or reset filters to display questions.";
    DOM.reviewOptionsList.innerHTML = '';
    DOM.reviewExplanationText.textContent = '';
    DOM.reviewTagPills.innerHTML = '';
    DOM.reviewQStatusBadge.className = 'badge';
    DOM.reviewQStatusBadge.textContent = '--';
    DOM.reviewBookmarkIndicator.classList.add('hidden');
    return;
  }

  const activeExists = filtered.some(f => f.question.id === AppState.reviewActiveQuestionId);
  if (!activeExists) {
    AppState.reviewActiveQuestionId = filtered[0].question.id;
  }

  // Group by section
  const sectionMap = new Map();
  filtered.forEach(item => {
    const secKey = item.section.id || item.section.name;
    if (!sectionMap.has(secKey)) sectionMap.set(secKey, { section: item.section, items: [] });
    sectionMap.get(secKey).items.push(item);
  });

  sectionMap.forEach(({ section, items }) => {
    const row = document.createElement('div');
    row.className = 'mini-palette-section-row';

    const isPracticeSection = (section.id === 'sec_practice') || 
                              (section.name && /practice/i.test(section.name)) ||
                              (AppState.sessionMode === 'practice') ||
                              (sectionMap.size === 1 && !/^(section|block)\b/i.test(section.name.trim()));

    if (!isPracticeSection) {
      const label = document.createElement('span');
      label.className = 'mini-palette-sec-label';
      label.textContent = section.name.replace(/Section|Block\s*/i, '').trim() || section.name.charAt(0);
      row.appendChild(label);
    }

    const track = document.createElement('div');
    track.className = 'mini-palette-buttons-track';

    items.forEach(item => {
      const btn = document.createElement('button');
      let statusClass = 'status-not-answered';
      if (item.isCorrect) statusClass = 'status-answered';
      else if (item.isUnattempted) statusClass = 'status-not-visited';

      btn.className = `mini-palette-btn ${statusClass} ${item.question.id === AppState.reviewActiveQuestionId ? 'active-review' : ''}`;
      btn.textContent = item.indexInSection;

      if (item.resp && (item.resp.bookmarked || item.resp.marked)) {
        const pip = document.createElement('span');
        pip.className = 'palette-bookmark-pip';
        pip.title = 'Bookmarked';
        btn.appendChild(pip);
      }

      btn.onclick = () => {
        AppState.reviewActiveQuestionId = item.question.id;
        renderActiveReviewCard(item);
        renderFilteredReviewQuestions();
        persistAppState();
      };

      track.appendChild(btn);
    });

    row.appendChild(track);
    DOM.reviewMiniPalette.appendChild(row);
  });

  const activeItem = filtered.find(f => f.question.id === AppState.reviewActiveQuestionId) || filtered[0];
  renderActiveReviewCard(activeItem);
}

function handleReviewPrevQuestion() {
  const list = getFilteredQuestionsList();
  if (list.length === 0) return;
  const curIdx = list.findIndex(item => item.question.id === AppState.reviewActiveQuestionId);
  const prevIdx = curIdx <= 0 ? list.length - 1 : curIdx - 1;
  AppState.reviewActiveQuestionId = list[prevIdx].question.id;
  renderFilteredReviewQuestions();
  persistAppState();
}

function handleReviewNextQuestion() {
  const list = getFilteredQuestionsList();
  if (list.length === 0) return;
  const curIdx = list.findIndex(item => item.question.id === AppState.reviewActiveQuestionId);
  const nextIdx = (curIdx + 1) % list.length;
  AppState.reviewActiveQuestionId = list[nextIdx].question.id;
  renderFilteredReviewQuestions();
  persistAppState();
}

function renderActiveReviewCard(item) {
  const { question, section, indexInSection, isCorrect, isIncorrect, quadrant, resp } = item;

  const isPracticeSection = (section && section.id === 'sec_practice') || 
                            (section && section.name && /practice/i.test(section.name)) ||
                            (AppState.sessionMode === 'practice');

  DOM.reviewQNum.textContent = isPracticeSection
    ? `Question ${indexInSection}`
    : `${section.name} — Question ${indexInSection}`;

  // Badges
  if (isCorrect) {
    DOM.reviewQStatusBadge.className = 'badge badge-correct';
    DOM.reviewQStatusBadge.textContent = 'Correct';
  } else if (isIncorrect) {
    DOM.reviewQStatusBadge.className = 'badge badge-incorrect';
    DOM.reviewQStatusBadge.textContent = 'Incorrect';
  } else {
    DOM.reviewQStatusBadge.className = 'badge badge-unattempted';
    DOM.reviewQStatusBadge.textContent = 'Unattempted';
  }

  DOM.reviewBookmarkIndicator.classList.toggle('hidden', !(resp.bookmarked || resp.marked));

  // Question Text
  DOM.reviewQText.textContent = question.text;

  // Options
  DOM.reviewOptionsList.innerHTML = '';
  question.options.forEach((optText, optIdx) => {
    const row = document.createElement('div');
    const isThisCorrect = optIdx === question.correctAnswerIndex;
    const isUserChosen = resp.selectedOption === optIdx;

    let rowClass = 'review-opt-row';
    let statusBadge = '';

    if (isThisCorrect) {
      rowClass += ' correct-answer';
      if (isUserChosen) {
        statusBadge = `<span class="opt-status-tag" style="color: var(--pastel-green);">Correct Key • Your Choice</span>`;
      } else {
        statusBadge = `<span class="opt-status-tag" style="color: var(--pastel-green);">Correct Key</span>`;
      }
    } else if (isUserChosen) {
      rowClass += ' user-incorrect';
      statusBadge = `<span class="opt-status-tag" style="color: var(--pastel-red);">Your Choice</span>`;
    }

    row.className = rowClass;
    row.innerHTML = `
      <span><strong>${String.fromCharCode(65 + optIdx)}.</strong> ${optText}</span>
      ${statusBadge}
    `;
    DOM.reviewOptionsList.appendChild(row);
  });

  DOM.reviewExplanationText.textContent = question.explanation || "No extended clinical commentary available.";
  if (question.reference) {
    const refDiv = document.createElement('div');
    refDiv.className = 'review-reference-citation';
    refDiv.style.marginTop = '0.75rem';
    refDiv.style.paddingTop = '0.5rem';
    refDiv.style.borderTop = '1px dashed var(--border-color)';
    refDiv.style.fontSize = '0.8rem';
    refDiv.style.color = 'var(--text-muted)';
    refDiv.innerHTML = '<strong>Reference:</strong> ';
    refDiv.appendChild(document.createTextNode(question.reference));
    DOM.reviewExplanationText.appendChild(refDiv);
  }

  // Tag Pills
  DOM.reviewTagPills.innerHTML = '';
  const tags = [];
  if (!isPracticeSection) {
    tags.push({ label: section.name, key: 'section', val: section.name });
  }

  normalizeToArray(question.subject).forEach(s => {
    const norm = normalizeSubject(s);
    tags.push({ label: norm, key: 'subject', val: norm });
  });

  normalizeToArray(question.system).forEach(sys => {
    const norm = normalizeSystem(sys);
    tags.push({ label: norm, key: 'system', val: norm });
  });

  if (question.difficulty) {
    tags.push({ label: question.difficulty, key: 'difficulty', val: question.difficulty });
  }

  if (question.format) {
    tags.push({ label: question.format, key: 'format', val: question.format });
  }

  tags.forEach(t => {
    const pill = document.createElement('span');
    pill.className = 'pill pill-interactive';
    pill.textContent = t.label;
    pill.onclick = () => filterReviewByTag(t.key, t.val);
    DOM.reviewTagPills.appendChild(pill);
  });
}

function filterReviewByTag(key, value) {
  switchMasterReviewTab('tab-question-review');
  const selectId = `filter-${key}`;
  const el = document.getElementById(selectId);
  if (el) {
    resetReviewFilters();
    el.value = value;
    applyFiltersFromDropdowns();
  }
}

// ==========================================================================
// 12. Master Tabs & Analytics Sub-Nav System
// ==========================================================================
function handleMasterTabClick(e) {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  const masterTabId = btn.getAttribute('data-master-tab');
  if (masterTabId) {
    switchMasterReviewTab(masterTabId);
  }
}

function switchMasterReviewTab(masterTabId) {
  AppState.reviewMasterTab = masterTabId;
  AppState.reviewActiveTab = masterTabId;

  document.querySelectorAll('#analytics-master-tabs-nav .tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-master-tab') === masterTabId);
  });

  DOM.tabQuestionReview.classList.toggle('hidden', masterTabId !== 'tab-question-review');
  DOM.tabAnalyticsMaster.classList.toggle('hidden', masterTabId !== 'tab-analytics-master');
  DOM.tabHistory.classList.toggle('hidden', masterTabId !== 'tab-history');

  // Col 3 (Question Review filters) is ONLY needed on Question Review.
  // In Analytics and History, toggle active workspace classes and hide Col 3 for a full 2-column view.
  if (DOM.analyticsWorkspace) {
    DOM.analyticsWorkspace.classList.toggle('history-active-workspace', masterTabId === 'tab-history');
    DOM.analyticsWorkspace.classList.toggle('analytics-active-workspace', masterTabId === 'tab-analytics-master');
    DOM.analyticsWorkspace.classList.toggle('review-active-workspace', masterTabId === 'tab-question-review');
  }

  const filterSidebar = document.querySelector('.analytics-filter-col');
  if (filterSidebar) {
    filterSidebar.classList.toggle('hidden', masterTabId !== 'tab-question-review');
  }

  if (masterTabId === 'tab-history') {
    renderHistoryTab();
  } else if (masterTabId === 'tab-analytics-master') {
    switchAnalyticsSubtab(AppState.analyticsSubtab || 'tab-triage-matrix');
  } else if (masterTabId === 'tab-question-review') {
    renderFilteredReviewQuestions();
  }
  persistAppState();
}

function handleAnalyticsSubnavClick(e) {
  const btn = e.target.closest('.subnav-item');
  if (!btn) return;
  const subtabId = btn.getAttribute('data-subtab');
  if (subtabId) {
    switchAnalyticsSubtab(subtabId);
  }
}

function switchAnalyticsSubtab(subtabId) {
  AppState.analyticsSubtab = subtabId;

  document.querySelectorAll('#analytics-subnav-bar .subnav-item').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-subtab') === subtabId);
  });

  if (subtabId === 'tab-triage-matrix') {
    DOM.tabTriageMatrix.classList.remove('hidden');
    DOM.tabAnalyticsGeneric.classList.add('hidden');
    calculateAndRenderTriageMatrix();
  } else {
    DOM.tabTriageMatrix.classList.add('hidden');
    DOM.tabAnalyticsGeneric.classList.remove('hidden');
    renderGenericAnalyticsTab(subtabId);
  }
  persistAppState();
}

function createMiniDonutSvg(correct, incorrect, unattempted, total) {
  if (total <= 0) return '';
  const size = 24;
  const strokeWidth = 4.5;
  const radius = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * radius;

  const cLen = (correct / total) * circ;
  const iLen = (incorrect / total) * circ;
  const uLen = (unattempted / total) * circ;

  return `
    <svg class="mini-donut-svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" title="Correct: ${correct}, Incorrect: ${incorrect}, Unattempted: ${unattempted}">
      <circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="var(--border-color)" stroke-width="${strokeWidth}" />
      ${cLen > 0 ? `<circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="var(--pastel-green)" stroke-width="${strokeWidth}" stroke-dasharray="${cLen.toFixed(2)} ${circ.toFixed(2)}" stroke-dashoffset="0" />` : ''}
      ${iLen > 0 ? `<circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="var(--pastel-red)" stroke-width="${strokeWidth}" stroke-dasharray="${iLen.toFixed(2)} ${circ.toFixed(2)}" stroke-dashoffset="-${cLen.toFixed(2)}" />` : ''}
      ${uLen > 0 ? `<circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="var(--border-strong)" stroke-width="${strokeWidth}" stroke-dasharray="${uLen.toFixed(2)} ${circ.toFixed(2)}" stroke-dashoffset="-${(cLen + iLen).toFixed(2)}" />` : ''}
    </svg>
  `;
}

function createMatrixDonutSvg(mastered, silly, lucky, gaps, total) {
  if (total <= 0) return '';
  const size = 24;
  const strokeWidth = 4.5;
  const radius = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * radius;

  const mLen = (mastered / total) * circ;
  const sLen = (silly / total) * circ;
  const lLen = (lucky / total) * circ;
  const gLen = (gaps / total) * circ;

  return `
    <svg class="mini-donut-svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" title="Mastered: ${mastered}, Silly: ${silly}, Lucky: ${lucky}, Gaps: ${gaps}">
      <circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="var(--border-color)" stroke-width="${strokeWidth}" />
      ${mLen > 0 ? `<circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="var(--pastel-green)" stroke-width="${strokeWidth}" stroke-dasharray="${mLen.toFixed(2)} ${circ.toFixed(2)}" stroke-dashoffset="0" />` : ''}
      ${sLen > 0 ? `<circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="var(--pastel-red)" stroke-width="${strokeWidth}" stroke-dasharray="${sLen.toFixed(2)} ${circ.toFixed(2)}" stroke-dashoffset="-${mLen.toFixed(2)}" />` : ''}
      ${lLen > 0 ? `<circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="var(--pastel-amber)" stroke-width="${strokeWidth}" stroke-dasharray="${lLen.toFixed(2)} ${circ.toFixed(2)}" stroke-dashoffset="-${(mLen + sLen).toFixed(2)}" />` : ''}
      ${gLen > 0 ? `<circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="var(--pastel-purple)" stroke-width="${strokeWidth}" stroke-dasharray="${gLen.toFixed(2)} ${circ.toFixed(2)}" stroke-dashoffset="-${(mLen + sLen + lLen).toFixed(2)}" />` : ''}
    </svg>
  `;
}

function renderGenericAnalyticsTab(tabId) {
  let groupKey = 'subject';
  let title = 'Subject Analysis';
  let desc = 'Analysis across curriculum subjects.';

  switch (tabId) {
    case 'tab-section-analysis':
      groupKey = 'section'; title = 'Section Analysis'; desc = 'Performance across test sections/blocks.'; break;
    case 'tab-subject-analysis':
      groupKey = 'subject'; title = 'Subject Analysis'; desc = 'Performance across subjects.'; break;
    case 'tab-system-analysis':
      groupKey = 'system'; title = 'System Analysis'; desc = 'Performance across clinical organ systems.'; break;
    case 'tab-difficulty-analysis':
      groupKey = 'difficulty'; title = 'Difficulty Analysis'; desc = 'Performance segmented by question difficulty.'; break;
    case 'tab-format-analysis':
      groupKey = 'format'; title = 'Question Format Analysis'; desc = 'Clinical vignettes vs one-liners.'; break;
    case 'tab-time-analysis':
      renderTimeAnalysisTab(); return;
    case 'tab-behavior-analysis':
      renderBehaviorAnalysisTab(); return;
  }

  DOM.genericTabTitle.textContent = title;
  DOM.genericTabDesc.textContent = desc;

  const groups = {};
  AppState.examData.sections.forEach(sec => {
    sec.questions.forEach(q => {
      let keys = [];
      if (groupKey === 'section') {
        keys = [sec.name];
      } else if (groupKey === 'subject') {
        keys = normalizeToArray(q.subject).map(s => normalizeSubject(s));
        if (keys.length === 0) keys = ['Uncategorized'];
      } else if (groupKey === 'system') {
        keys = normalizeToArray(q.system).map(s => normalizeSystem(s));
        if (keys.length === 0) keys = ['General'];
      } else if (groupKey === 'format') {
        keys = [canonicalizeFormat(q.format, q.text)];
      } else {
        keys = [q[groupKey] || 'Uncategorized'];
      }

      keys.forEach(name => {
        if (!groups[name]) groups[name] = { total: 0, correct: 0, incorrect: 0, unattempted: 0, key: groupKey };
        groups[name].total++;

        const resp = AppState.responses[q.id];
        if (!resp || resp.selectedOption === null) groups[name].unattempted++;
        else if (resp.selectedOption === q.correctAnswerIndex) groups[name].correct++;
        else groups[name].incorrect++;
      });
    });
  });

  const tableHead = DOM.analyticsTable.querySelector('thead');
  const tableBody = DOM.analyticsTable.querySelector('tbody');
  tableHead.innerHTML = `
    <tr>
      <th>Category</th>
      <th>Total</th>
      <th>Correct</th>
      <th>Incorrect</th>
      <th>Unattempted</th>
      <th>Accuracy</th>
      <th style="text-align: center; width: 60px;">Ratio</th>
    </tr>
  `;
  tableBody.innerHTML = '';

  Object.entries(groups)
    .sort((a, b) => {
      if (groupKey === 'subject' || groupKey === 'system') {
        return a[0].localeCompare(b[0]);
      }
      return b[1].total - a[1].total;
    })
    .forEach(([name, data]) => {
      const accuracy = (data.correct + data.incorrect) > 0
        ? ((data.correct / (data.correct + data.incorrect)) * 100).toFixed(1) + '%'
        : '0.0%';

      const row = document.createElement('tr');
      row.className = 'clickable-row';
      row.innerHTML = `
        <td class="bold-text">${name}</td>
        <td>${data.total}</td>
        <td style="color: var(--pastel-green); font-weight: 700;">${data.correct}</td>
        <td style="color: var(--pastel-red); font-weight: 700;">${data.incorrect}</td>
        <td style="color: var(--text-muted);">${data.unattempted}</td>
        <td><strong>${accuracy}</strong></td>
        <td class="donut-cell">${createMiniDonutSvg(data.correct, data.incorrect, data.unattempted, data.total)}</td>
      `;
      row.onclick = () => filterReviewByTag(data.key, name);
      tableBody.appendChild(row);
    });
}

function renderTimeAnalysisTab() {
  DOM.genericTabTitle.textContent = "Time & Pacing Analysis";
  DOM.genericTabDesc.textContent = "Section pacing and question resolution velocity.";

  const tableHead = DOM.analyticsTable.querySelector('thead');
  const tableBody = DOM.analyticsTable.querySelector('tbody');
  tableHead.innerHTML = `
    <tr>
      <th>Section / Block</th>
      <th>Allocated</th>
      <th>Time Used</th>
      <th>Avg Time / Q</th>
      <th>Pacing Status</th>
    </tr>
  `;
  tableBody.innerHTML = '';

  AppState.examData.sections.forEach(sec => {
    const allocatedSec = (sec.durationMinutes || 42) * 60;
    const timeUsed = allocatedSec - (AppState.sectionTimesLeft[sec.id] || 0);
    const avgPerQ = sec.questions.length > 0 ? (timeUsed / sec.questions.length).toFixed(1) : 0;
    const pacing = avgPerQ > 65 ? 'Slow' : avgPerQ < 35 ? 'Fast' : 'Optimal';

    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="bold-text">${sec.name}</td>
      <td>${Math.floor(allocatedSec / 60)}m</td>
      <td>${Math.floor(timeUsed / 60)}m ${timeUsed % 60}s</td>
      <td>${avgPerQ}s</td>
      <td><span class="badge">${pacing}</span></td>
    `;
    tableBody.appendChild(row);
  });
}

function renderBehaviorAnalysisTab() {
  DOM.genericTabTitle.textContent = "Behavioral & Option Switch Analysis";
  DOM.genericTabDesc.textContent = "Tracking answer alterations and clinical second-guessing.";

  let totalSwitches = 0, switchCorrect = 0, switchIncorrect = 0;

  AppState.examData.sections.forEach(sec => {
    sec.questions.forEach(q => {
      const resp = AppState.responses[q.id];
      if (resp && resp.switchCount > 0) {
        totalSwitches += resp.switchCount;
        if (resp.selectedOption === q.correctAnswerIndex) switchCorrect++;
        else switchIncorrect++;
      }
    });
  });

  const tableHead = DOM.analyticsTable.querySelector('thead');
  const tableBody = DOM.analyticsTable.querySelector('tbody');
  tableHead.innerHTML = `
    <tr>
      <th>Metric</th>
      <th>Observed Count</th>
      <th>Clinical Implication</th>
    </tr>
  `;
  tableBody.innerHTML = `
    <tr>
      <td class="bold-text">Total Option Switches</td>
      <td>${totalSwitches}</td>
      <td>Altered selections during test</td>
    </tr>
    <tr>
      <td class="bold-text">Switches Resulting in Correct</td>
      <td style="color: var(--pastel-green); font-weight: 700;">${switchCorrect}</td>
      <td>Second-guess improved accuracy</td>
    </tr>
    <tr>
      <td class="bold-text">Switches Resulting in Incorrect</td>
      <td style="color: var(--pastel-red); font-weight: 700;">${switchIncorrect}</td>
      <td>Changed away from correct response</td>
    </tr>
  `;
}

// ==========================================================================
// 13. Plaintext Copy & JSON Export
// ==========================================================================
function copyActiveReviewQuestion() {
  const item = getFilteredQuestionsList().find(f => f.question.id === AppState.reviewActiveQuestionId);
  if (!item) return;

  const text = formatQuestionPlaintext(item.question, item.resp);
  navigator.clipboard.writeText(text).then(() => {
    showToast("Question copied to clipboard in clean plain text.");
  });
}

function copyAllFilteredQuestions() {
  const list = getFilteredQuestionsList();
  if (list.length === 0) {
    showToast("No questions match current filter.");
    return;
  }

  const full = list.map((item, idx) => `=== Item ${idx + 1} (${item.section.name}) ===\n` + formatQuestionPlaintext(item.question, item.resp)).join("\n\n");
  navigator.clipboard.writeText(full).then(() => {
    showToast(`Copied ${list.length} questions to clipboard.`);
  });
}

function formatQuestionPlaintext(q, resp) {
  const chosen = resp && resp.selectedOption !== null && resp.selectedOption !== undefined
    ? `${String.fromCharCode(65 + resp.selectedOption)}. ${q.options[resp.selectedOption]}`
    : "Unattempted";
  const correct = `${String.fromCharCode(65 + q.correctAnswerIndex)}. ${q.options[q.correctAnswerIndex]}`;
  const conf = resp && resp.confidence ? (resp.confidence === 'sure' ? 'Confident' : 'Low Confidence') : 'Unattempted / Unspecified';
  const bookmarked = resp && (resp.bookmarked || resp.marked) ? 'Yes' : 'No';

  const refText = q.reference ? `\nReference: ${q.reference}` : '';
  const metaText = `\nFormat: ${q.format || 'N/A'} | Difficulty: ${q.difficulty || 'Medium'} | Topic: ${q.topic || 'N/A'}`;
  return `Question: ${q.text}\n\nA. ${q.options[0]}\nB. ${q.options[1]}\nC. ${q.options[2]}\nD. ${q.options[3]}\n\nCandidate Choice: ${chosen} (Confidence: ${conf}, Bookmarked: ${bookmarked})\nCorrect Key: ${correct}${metaText}\n\nExplanation:\n${q.explanation || 'N/A'}${refText}`;
}

function downloadTestResults() {
  const scheme = AppState.examData.markingScheme || { correct: 4, incorrect: -1, unattempted: 0 };
  const payload = {
    branding: "triage",
    examType: AppState.examMode,
    examTitle: AppState.examData.examTitle || 'CBT Mock Simulation',
    exportedAt: new Date().toISOString(),
    markingScheme: scheme,
    summary: {
      totalQuestions: 0,
      correct: 0,
      incorrect: 0,
      unattempted: 0,
      totalScore: 0,
      triageMatrix: {
        mastered: 0,
        sillyMistakes: 0,
        luckyGuesses: 0,
        knowledgeGaps: 0
      }
    },
    sections: []
  };

  AppState.examData.sections.forEach(sec => {
    const secData = {
      id: sec.id,
      name: sec.name,
      questions: []
    };

    sec.questions.forEach(q => {
      payload.summary.totalQuestions++;
      const resp = AppState.responses[q.id] || {};
      const isAttempted = resp.selectedOption !== null && resp.selectedOption !== undefined;
      const isCorrect = isAttempted && resp.selectedOption === q.correctAnswerIndex;
      const quad = getQuestionQuadrant(q, resp);

      if (!isAttempted) payload.summary.unattempted++;
      else if (isCorrect) payload.summary.correct++;
      else payload.summary.incorrect++;

      if (quad === 'mastered') payload.summary.triageMatrix.mastered++;
      else if (quad === 'silly_mistake') payload.summary.triageMatrix.sillyMistakes++;
      else if (quad === 'lucky_guesses') payload.summary.triageMatrix.luckyGuesses++;
      else payload.summary.triageMatrix.knowledgeGaps++;

      secData.questions.push({
        id: q.id,
        text: q.text,
        subject: normalizeToArray(q.subject).map(s => normalizeSubject(s)),
        system: normalizeToArray(q.system).map(s => normalizeSystem(s)),
        format: canonicalizeFormat(q.format, q.text),
        difficulty: canonicalizeDifficulty(q.difficulty),
        topic: q.topic || '',
        reference: q.reference || '',
        candidateAnswerIndex: resp.selectedOption,
        correctAnswerIndex: q.correctAnswerIndex,
        confidence: resp.confidence,
        triageQuadrant: quad,
        timeSpentSeconds: resp.timeSpent || 0,
        switches: resp.switchCount || 0
      });
    });

    payload.sections.push(secData);
  });

  payload.summary.totalScore = (payload.summary.correct * scheme.correct) +
    (payload.summary.incorrect * scheme.incorrect) +
    (payload.summary.unattempted * scheme.unattempted);

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `triage_${AppState.examMode}_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// ==========================================================================
// 13.4. IndexedDB Persistence Layer (triage_cbt_db)
// ==========================================================================
const DB_NAME = 'triage_cbt_db';
const DB_VERSION = 1;
const DB_STORE_ATTEMPTS = 'attempts';

let dbInstance = null;

function initDB() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      resolve(null);
      return;
    }
    if (dbInstance) {
      resolve(dbInstance);
      return;
    }

    try {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(DB_STORE_ATTEMPTS)) {
          const store = db.createObjectStore(DB_STORE_ATTEMPTS, { keyPath: 'id' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };

      request.onsuccess = (event) => {
        dbInstance = event.target.result;
        resolve(dbInstance);
      };

      request.onerror = (event) => {
        console.warn('IndexedDB open error:', event.target.error);
        resolve(null);
      };
    } catch (e) {
      console.warn('IndexedDB error:', e);
      resolve(null);
    }
  });
}

async function saveAttemptDB(attempt) {
  try {
    const db = await initDB();
    if (!db) return false;
    return new Promise((resolve) => {
      const tx = db.transaction(DB_STORE_ATTEMPTS, 'readwrite');
      const store = tx.objectStore(DB_STORE_ATTEMPTS);
      const req = store.put(attempt);
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('saveAttemptDB error:', err);
    return false;
  }
}

async function getAllAttemptsDB() {
  try {
    const db = await initDB();
    if (!db) return [];
    return new Promise((resolve) => {
      const tx = db.transaction(DB_STORE_ATTEMPTS, 'readonly');
      const store = tx.objectStore(DB_STORE_ATTEMPTS);
      const req = store.getAll();
      req.onsuccess = () => {
        const results = req.result || [];
        results.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
        resolve(results);
      };
      req.onerror = () => resolve([]);
    });
  } catch (err) {
    console.warn('getAllAttemptsDB error:', err);
    return [];
  }
}

async function deleteAttemptDB(attemptId) {
  try {
    const db = await initDB();
    if (!db) return false;
    return new Promise((resolve) => {
      const tx = db.transaction(DB_STORE_ATTEMPTS, 'readwrite');
      const store = tx.objectStore(DB_STORE_ATTEMPTS);
      const req = store.delete(attemptId);
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('deleteAttemptDB error:', err);
    return false;
  }
}

async function clearAllAttemptsDB() {
  try {
    const db = await initDB();
    if (!db) return false;
    return new Promise((resolve) => {
      const tx = db.transaction(DB_STORE_ATTEMPTS, 'readwrite');
      const store = tx.objectStore(DB_STORE_ATTEMPTS);
      const req = store.clear();
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('clearAllAttemptsDB error:', err);
    return false;
  }
}

async function bulkImportAttemptsDB(incomingAttempts, mode) {
  try {
    const db = await initDB();
    if (!db) return false;
    return new Promise((resolve) => {
      const tx = db.transaction(DB_STORE_ATTEMPTS, 'readwrite');
      const store = tx.objectStore(DB_STORE_ATTEMPTS);

      if (mode === 'replace') {
        store.clear();
      }

      incomingAttempts.forEach(att => {
        store.put(att);
      });

      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('bulkImportAttemptsDB error:', err);
    return false;
  }
}

async function loadHistoryFromDB() {
  const attempts = await getAllAttemptsDB();
  if (attempts && attempts.length > 0) {
    AppState.sessionHistory = attempts;
  }
}

// ==========================================================================
// 13.5. Test History & Session Comparison Engine
// ==========================================================================
function recordCurrentAttempt() {
  if (AppState.isSampleTest) {
    return;
  }

  const scheme = AppState.examData.markingScheme || { correct: 4, incorrect: -1, unattempted: 0 };
  let correct = 0, incorrect = 0, unattempted = 0, totalQuestions = 0;
  let mastered = 0, silly = 0, lucky = 0, gaps = 0;

  AppState.examData.sections.forEach(sec => {
    sec.questions.forEach(q => {
      totalQuestions++;
      const resp = AppState.responses[q.id] || {};
      const quad = getQuestionQuadrant(q, resp);
      if (quad === 'mastered') mastered++;
      else if (quad === 'silly_mistake') silly++;
      else if (quad === 'lucky_guesses') lucky++;
      else gaps++;

      if (resp.selectedOption === null || resp.selectedOption === undefined) {
        unattempted++;
      } else if (resp.selectedOption === q.correctAnswerIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });
  });

  const totalScore = (correct * scheme.correct) + (incorrect * scheme.incorrect) + (unattempted * scheme.unattempted);
  const maxScore = totalQuestions * scheme.correct;
  const accuracy = (correct + incorrect) > 0 ? ((correct / (correct + incorrect)) * 100).toFixed(1) : "0.0";

  const now = new Date();
  const formattedDate = now.toLocaleDateString(undefined, {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }) + ', ' + now.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const attempt = {
    id: 'att_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
    timestamp: Date.now(),
    formattedDate,
    examMode: AppState.examMode,
    examTitle: AppState.examData.examTitle || (AppState.examMode === 'inicet' ? 'INI-CET CBT Mock Test' : 'NEET-PG CBT Mock Test'),
    examData: JSON.parse(JSON.stringify(AppState.examData)),
    responses: JSON.parse(JSON.stringify(AppState.responses)),
    metrics: {
      totalScore: Number.isInteger(totalScore) ? totalScore : parseFloat(totalScore.toFixed(2)),
      maxScore: Number.isInteger(maxScore) ? maxScore : parseFloat(maxScore.toFixed(2)),
      correct,
      incorrect,
      unattempted,
      totalQuestions,
      accuracy: parseFloat(accuracy),
      mastered,
      silly,
      lucky,
      gaps
    }
  };

  AppState.sessionHistory.push(attempt);
  saveAttemptDB(attempt);
  return attempt;
}

function handleHistoryFilterChange() {
  if (DOM.historyFilterExam) {
    AppState.historyFilterExam = DOM.historyFilterExam.value;
  }
  renderHistoryTab();
  persistAppState();
}

function renderHistoryAggregates() {
  const allAttempts = AppState.sessionHistory || [];
  const filter = AppState.historyFilterExam || 'all';

  let neetTotal = 0, iniTotal = 0;
  allAttempts.forEach(att => {
    if (att.examMode === 'inicet') iniTotal++;
    else neetTotal++;
  });

  const filteredAttempts = allAttempts.filter(att => {
    if (filter === 'neetpg') return att.examMode !== 'inicet';
    if (filter === 'inicet') return att.examMode === 'inicet';
    return true;
  });

  if (filteredAttempts.length === 0) {
    if (DOM.histAggTests) DOM.histAggTests.textContent = '0';
    if (DOM.histAggBreakdown) DOM.histAggBreakdown.textContent = `${neetTotal} NEET-PG • ${iniTotal} INI-CET`;
    if (DOM.histAggScoreAcc) DOM.histAggScoreAcc.textContent = '--';
    if (DOM.histAggAvgSub) DOM.histAggAvgSub.textContent = 'NEET-PG: -- • INI-CET: --';
    if (DOM.histAggCorrect) DOM.histAggCorrect.textContent = '0';
    if (DOM.histAggCorrectSub) DOM.histAggCorrectSub.textContent = '0 Total Correct';
    if (DOM.histAggIncorrect) DOM.histAggIncorrect.textContent = '0';
    if (DOM.histAggIncorrectSub) DOM.histAggIncorrectSub.textContent = '0 Total Incorrect';
    return;
  }

  let neetCount = 0, iniCount = 0;
  let neetScoreSum = 0, neetMaxSum = 0, neetAccSum = 0;
  let iniScoreSum = 0, iniMaxSum = 0, iniAccSum = 0;
  let totalCorrectSum = 0, totalIncorrectSum = 0;

  filteredAttempts.forEach(att => {
    const m = att.metrics || {};
    const correct = m.correct !== undefined ? m.correct : ((m.mastered || 0) + (m.lucky || 0));
    const incorrect = m.incorrect !== undefined ? m.incorrect : ((m.silly || 0) + (m.gaps || 0));

    totalCorrectSum += correct;
    totalIncorrectSum += incorrect;

    if (att.examMode === 'inicet') {
      iniCount++;
      iniScoreSum += (m.totalScore || 0);
      iniMaxSum += (m.maxScore || 0);
      iniAccSum += (m.accuracy || 0);
    } else {
      neetCount++;
      neetScoreSum += (m.totalScore || 0);
      neetMaxSum += (m.maxScore || 0);
      neetAccSum += (m.accuracy || 0);
    }
  });

  const avgNeetScore = neetCount > 0 ? (neetScoreSum / neetCount).toFixed(1) : '--';
  const avgNeetMax = neetCount > 0 ? (neetMaxSum / neetCount).toFixed(0) : '--';
  const avgNeetAcc = neetCount > 0 ? (neetAccSum / neetCount).toFixed(1) : '--';

  const avgIniScore = iniCount > 0 ? (iniScoreSum / iniCount).toFixed(1) : '--';
  const avgIniMax = iniCount > 0 ? (iniMaxSum / iniCount).toFixed(0) : '--';
  const avgIniAcc = iniCount > 0 ? (iniAccSum / iniCount).toFixed(1) : '--';

  const avgCorrect = (totalCorrectSum / filteredAttempts.length).toFixed(1);
  const avgIncorrect = (totalIncorrectSum / filteredAttempts.length).toFixed(1);

  // Card 1: Total Tests Taken
  if (DOM.histAggTests) DOM.histAggTests.textContent = filteredAttempts.length;
  if (DOM.histAggBreakdown) {
    if (filter === 'all') {
      DOM.histAggBreakdown.textContent = `${neetCount} NEET-PG • ${iniCount} INI-CET`;
    } else if (filter === 'neetpg') {
      DOM.histAggBreakdown.textContent = `${neetCount} NEET-PG Mock(s)`;
    } else {
      DOM.histAggBreakdown.textContent = `${iniCount} INI-CET Mock(s)`;
    }
  }

  // Card 2: Average Score & Accuracy (Separated)
  if (DOM.histAggScoreAcc) {
    if (filter === 'neetpg') {
      DOM.histAggScoreAcc.textContent = `${avgNeetScore} / ${avgNeetMax}`;
    } else if (filter === 'inicet') {
      DOM.histAggScoreAcc.textContent = `${avgIniScore} / ${avgIniMax}`;
    } else {
      if (neetCount > 0 && iniCount > 0) {
        DOM.histAggScoreAcc.textContent = `${avgNeetAcc}% • ${avgIniAcc}%`;
      } else if (neetCount > 0) {
        DOM.histAggScoreAcc.textContent = `${avgNeetScore} / ${avgNeetMax}`;
      } else if (iniCount > 0) {
        DOM.histAggScoreAcc.textContent = `${avgIniScore} / ${avgIniMax}`;
      } else {
        DOM.histAggScoreAcc.textContent = '--';
      }
    }
  }
  if (DOM.histAggAvgSub) {
    if (filter === 'neetpg') {
      DOM.histAggAvgSub.textContent = `Avg Accuracy: ${avgNeetAcc}%`;
    } else if (filter === 'inicet') {
      DOM.histAggAvgSub.textContent = `Avg Accuracy: ${avgIniAcc}%`;
    } else {
      DOM.histAggAvgSub.textContent = `NEET: ${neetCount ? `${avgNeetScore}/${avgNeetMax} (${avgNeetAcc}%)` : '--'} • INI: ${iniCount ? `${avgIniScore}/${avgIniMax} (${avgIniAcc}%)` : '--'}`;
    }
  }

  // Card 3: Average Correct Answers
  if (DOM.histAggCorrect) DOM.histAggCorrect.textContent = avgCorrect;
  if (DOM.histAggCorrectSub) DOM.histAggCorrectSub.textContent = `${totalCorrectSum} Total Correct`;

  // Card 4: Average Incorrect Answers
  if (DOM.histAggIncorrect) DOM.histAggIncorrect.textContent = avgIncorrect;
  if (DOM.histAggIncorrectSub) DOM.histAggIncorrectSub.textContent = `${totalIncorrectSum} Total Incorrect`;
}

function toggleHistorySortOrder() {
  AppState.historySortOrder = AppState.historySortOrder === 'oldest' ? 'latest' : 'oldest';
  renderHistoryTab();
  persistAppState();
}

function renderHistoryTab() {
  renderHistoryAggregates();

  const tbody = DOM.historyComparisonTable.querySelector('tbody');
  tbody.innerHTML = '';

  if (DOM.historySortArrow) {
    DOM.historySortArrow.textContent = AppState.historySortOrder === 'oldest' ? '▲' : '▼';
  }
  if (DOM.historyFilterExam) {
    DOM.historyFilterExam.value = AppState.historyFilterExam || 'all';
  }

  const allAttempts = AppState.sessionHistory || [];
  if (allAttempts.length === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="7" class="text-center text-muted" style="padding: 2.5rem 1rem; font-family: var(--font-sans);">No test attempts recorded in history yet. Complete a mock test or import a history JSON.</td>`;
    tbody.appendChild(tr);
    return;
  }

  const filter = AppState.historyFilterExam || 'all';
  const filteredAttempts = allAttempts.filter(att => {
    if (filter === 'neetpg') return att.examMode !== 'inicet';
    if (filter === 'inicet') return att.examMode === 'inicet';
    return true;
  });

  if (filteredAttempts.length === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="7" class="text-center text-muted" style="padding: 2.5rem 1rem; font-family: var(--font-sans);">No test attempts match the selected test type filter.</td>`;
    tbody.appendChild(tr);
    return;
  }

  filteredAttempts.sort((a, b) => {
    const tA = a.timestamp || 0;
    const tB = b.timestamp || 0;
    return AppState.historySortOrder === 'oldest' ? (tA - tB) : (tB - tA);
  });

  filteredAttempts.forEach((att, idx) => {
    const isCurrentViewing = AppState.viewingAttemptId === att.id || (!AppState.viewingAttemptId && att.id === allAttempts[allAttempts.length - 1].id);
    const tr = document.createElement('tr');
    tr.className = isCurrentViewing ? 'history-active-row' : '';

    const m = att.metrics || {};
    const formattedExamType = att.examMode === 'inicet' ? 'INI-CET' : 'NEET-PG';
    const examTitle = att.examTitle || (att.examMode === 'inicet' ? 'INI-CET CBT Mock Test' : 'NEET-PG CBT Mock Test');

    tr.innerHTML = `
      <td><strong>#${idx + 1}</strong></td>
      <td style="font-family: var(--font-sans); font-size: 0.82rem;">${att.formattedDate}</td>
      <td><span class="brand-badge">${formattedExamType}</span></td>
      <td>${examTitle}</td>
      <td style="font-family: var(--font-sans); font-weight: 700;">${m.totalScore} <span class="text-muted" style="font-size: 0.75rem;">/ ${m.maxScore}</span></td>
      <td style="font-family: var(--font-sans); font-weight: 700;">${m.accuracy}%</td>
      <td style="text-align: center;">
        <div class="history-actions-cell">
          <button type="button" class="btn btn-outline btn-sm btn-view-attempt" data-attempt-id="${att.id}">
            ${isCurrentViewing ? 'Viewing' : 'View'}
          </button>
          <button type="button" class="btn btn-outline btn-sm btn-table-delete" data-attempt-id="${att.id}" title="Delete Attempt">
            Delete
          </button>
        </div>
      </td>
    `;

    const viewBtn = tr.querySelector('.btn-view-attempt');
    if (viewBtn) {
      if (isCurrentViewing) {
        viewBtn.disabled = true;
      } else {
        viewBtn.onclick = () => viewPastAttempt(att.id);
      }
    }

    const delBtn = tr.querySelector('.btn-table-delete');
    if (delBtn) {
      delBtn.onclick = () => deleteAttempt(att.id);
    }

    tbody.appendChild(tr);
  });
}

function viewPastAttempt(attemptId) {
  const attempt = AppState.sessionHistory.find(a => a.id === attemptId);
  if (!attempt) return;

  const latest = AppState.sessionHistory[AppState.sessionHistory.length - 1];
  const isLatest = latest && attempt.id === latest.id;

  AppState.viewingAttemptId = attempt.id;
  AppState.examMode = attempt.examMode;
  AppState.examData = JSON.parse(JSON.stringify(attempt.examData));
  if (attempt.examTitle && AppState.examData) {
    AppState.examData.examTitle = attempt.examTitle;
  }
  AppState.responses = JSON.parse(JSON.stringify(attempt.responses));

  DOM.pastAttemptLabel.textContent = `Viewing Archived Attempt: ${attempt.examTitle} (${attempt.formattedDate || 'Saved Test'})`;
  DOM.pastAttemptBanner.classList.remove('hidden');
  if (DOM.sampleTestBanner) {
    DOM.sampleTestBanner.classList.add('hidden');
  }
  if (DOM.btnReturnLatest) {
    DOM.btnReturnLatest.classList.toggle('hidden', isLatest);
  }

  populateFilterDropdowns();
  calculateAndRenderKPIs();
  calculateAndRenderTriageMatrix();
  renderFilteredReviewQuestions();
  updateResetFilterState();

  if (AppState.reviewMasterTab === 'tab-history') {
    renderHistoryTab();
  }

  showToast(`Loaded Attempt (${attempt.formattedDate}) into Review & Analytics.`, 2500);
  persistAppState();
}

function returnToLatestTest() {
  if (!AppState.sessionHistory || AppState.sessionHistory.length === 0) return;
  const latest = AppState.sessionHistory[AppState.sessionHistory.length - 1];
  viewPastAttempt(latest.id);
}

function deleteAttempt(attemptId) {
  const attempt = AppState.sessionHistory.find(a => a.id === attemptId);
  if (!attempt) return;

  showModal(
    "Delete Test Attempt",
    `Are you sure you want to delete this test attempt from ${attempt.formattedDate}? This action cannot be undone.`,
    async () => {
      await deleteAttemptDB(attemptId);
      AppState.sessionHistory = AppState.sessionHistory.filter(a => a.id !== attemptId);

      if (AppState.viewingAttemptId === attemptId) {
        if (AppState.sessionHistory.length > 0) {
          returnToLatestTest();
        } else {
          AppState.viewingAttemptId = null;
          AppState.examData = null;
          AppState.responses = {};
          DOM.pastAttemptBanner.classList.add('hidden');
          if (DOM.sampleTestBanner) {
            DOM.sampleTestBanner.classList.add('hidden');
          }
        }
      }

      renderHistoryTab();
      showToast("Test attempt deleted.", 2000);
    },
    true
  );
}

function confirmClearAllHistory() {
  if (!AppState.sessionHistory || AppState.sessionHistory.length === 0) {
    showToast("No test attempts in history to clear.", 2000);
    return;
  }

  showModal(
    "Clear All Test History",
    `Are you sure you want to permanently delete all ${AppState.sessionHistory.length} recorded test attempts? This action cannot be undone.`,
    async () => {
      await clearAllAttemptsDB();
      AppState.sessionHistory = [];
      AppState.viewingAttemptId = null;
      AppState.examData = null;
      AppState.responses = {};
      DOM.pastAttemptBanner.classList.add('hidden');
      if (DOM.sampleTestBanner) {
        DOM.sampleTestBanner.classList.add('hidden');
      }

      renderHistoryTab();
      showToast("All test history permanently cleared.", 2500);
    },
    true
  );
}

function exportHistoryJson() {
  if (!AppState.sessionHistory || AppState.sessionHistory.length === 0) {
    showToast("No test attempts in history to export.", 2500);
    return;
  }

  const exportPayload = {
    app: "triage",
    version: "1.0",
    exportedAt: new Date().toISOString(),
    totalAttempts: AppState.sessionHistory.length,
    attempts: AppState.sessionHistory
  };

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const dateStr = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `triage_history_${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`Exported ${AppState.sessionHistory.length} test attempt(s) to JSON.`, 2500);
}

function handleHistoryFileSelect(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target.result);
      let incomingAttempts = [];

      if (Array.isArray(parsed)) {
        incomingAttempts = parsed;
      } else if (parsed && Array.isArray(parsed.attempts)) {
        incomingAttempts = parsed.attempts;
      } else {
        throw new Error("Invalid History JSON: Root must contain an 'attempts' array.");
      }

      if (incomingAttempts.length === 0) {
        throw new Error("The imported history file contains no test attempts.");
      }

      incomingAttempts.forEach((att, idx) => {
        if (!att.examData || !att.responses || !att.metrics) {
          throw new Error(`Attempt at index ${idx} is missing required examData, responses, or metrics.`);
        }
      });

      if (AppState.sessionHistory.length > 0) {
        const modalHtml = `
          <p>You already have ${AppState.sessionHistory.length} test attempt(s) in your current session.</p>
          <p>The imported file contains ${incomingAttempts.length} attempt(s).</p>
          <p style="margin-top: 0.75rem;">Would you like to merge with current attempts or replace all?</p>
          <div style="display: flex; gap: 0.6rem; margin-top: 1.25rem;">
            <button type="button" class="btn btn-primary" id="btn-import-merge" style="flex: 1;">Merge with Current</button>
            <button type="button" class="btn btn-outline" id="btn-import-replace" style="flex: 1;">Replace All</button>
          </div>
        `;

        showModal("Import History JSON", modalHtml, null, true);

        const mergeBtn = document.getElementById('btn-import-merge');
        const replaceBtn = document.getElementById('btn-import-replace');

        if (mergeBtn) {
          mergeBtn.onclick = () => {
            DOM.modalContainer.classList.add('hidden');
            applyImportedHistory(incomingAttempts, 'merge');
          };
        }
        if (replaceBtn) {
          replaceBtn.onclick = () => {
            DOM.modalContainer.classList.add('hidden');
            applyImportedHistory(incomingAttempts, 'replace');
          };
        }
      } else {
        applyImportedHistory(incomingAttempts, 'replace');
      }
    } catch (err) {
      showNoticeModal("Import Failed", err.message);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

async function applyImportedHistory(incomingAttempts, mode) {
  if (mode === 'replace') {
    AppState.sessionHistory = incomingAttempts;
  } else {
    const existingIds = new Set(AppState.sessionHistory.map(a => a.id));
    incomingAttempts.forEach(att => {
      if (!existingIds.has(att.id)) {
        AppState.sessionHistory.push(att);
        existingIds.add(att.id);
      }
    });
    AppState.sessionHistory.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
  }

  await bulkImportAttemptsDB(AppState.sessionHistory, 'replace');

  if (AppState.view !== 'review') {
    switchView('review');
  }

  returnToLatestTest();
  switchMasterReviewTab('tab-history');

  showToast(`Successfully imported ${incomingAttempts.length} test attempt(s).`, 2500);
}

// ==========================================================================
// 14. Modals & Persistence
// ==========================================================================
function showModal(title, message, onConfirm, showCancel = true, onCancel = null) {
  DOM.modalTitle.textContent = title;
  if (typeof message === 'string' && message.trim().startsWith('<')) {
    DOM.modalBody.innerHTML = message;
  } else {
    DOM.modalBody.textContent = message;
  }
  DOM.modalBtnCancel.style.display = showCancel ? 'inline-flex' : 'none';
  DOM.modalContainer.classList.remove('hidden');

  DOM.modalBtnConfirm.onclick = () => {
    DOM.modalContainer.classList.add('hidden');
    if (onConfirm) onConfirm();
  };
  DOM.modalBtnCancel.onclick = () => {
    DOM.modalContainer.classList.add('hidden');
    if (onCancel) onCancel();
  };
}

let toastTimeout = null;
function showToast(message, duration = 2500, type = null) {
  if (!DOM.toastNotification) return;

  if (typeof duration === 'string' && !type) {
    type = duration;
    duration = 2500;
  }

  DOM.toastNotification.textContent = message;
  DOM.toastNotification.classList.remove('toast-error', 'toast-success', 'toast-warning');

  const lower = (message || '').toLowerCase();
  let resolvedType = type;
  if (!resolvedType) {
    if (lower.includes('error') || lower.includes('fail') || lower.includes('please enter') || lower.includes('cannot') || lower.includes('could not')) {
      resolvedType = 'error';
    } else if (lower.includes('success') || lower.includes('loaded attempt') || lower.includes('saved') || lower.includes('downloaded') || lower.includes('copied') || lower.includes('exported') || lower.includes('imported')) {
      resolvedType = 'success';
    } else if (lower.includes('warn') || lower.includes('elapsed') || lower.includes('cancel')) {
      resolvedType = 'warning';
    }
  }

  if (resolvedType === 'error') {
    DOM.toastNotification.classList.add('toast-error');
  } else if (resolvedType === 'success') {
    DOM.toastNotification.classList.add('toast-success');
  } else if (resolvedType === 'warning') {
    DOM.toastNotification.classList.add('toast-warning');
  }

  DOM.toastNotification.classList.remove('hidden');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    DOM.toastNotification.classList.add('hidden');
  }, duration);
}

function showNoticeModal(title, message) {
  showModal(title, message, null, false);
}

function persistExamState() {
  if (isAppInitializing) return;
  if (AppState.view !== 'exam') return;
  const payload = {
    examMode: AppState.examMode,
    sessionMode: AppState.sessionMode,
    isSampleTest: AppState.isSampleTest,
    practiceElapsedTime: AppState.practiceElapsedTime,
    examData: AppState.examData,
    activeSectionIndex: AppState.activeSectionIndex,
    activeQuestionIndex: AppState.activeQuestionIndex,
    sectionTimesLeft: AppState.sectionTimesLeft,
    responses: AppState.responses,
    sectionStatus: AppState.sectionStatus
  };
  try {
    localStorage.setItem('triage_exam_session', JSON.stringify(payload));
  } catch (e) {}
  persistAppState();
}

function persistAppState() {
  if (isAppInitializing) return;
  try {
    const customTestName = (DOM.inputTestName ? DOM.inputTestName.value.trim() : '') || AppState.customTestName || '';
    const payload = {
      view: AppState.view || 'home',
      isSampleTest: AppState.isSampleTest,
      customTestName,
      examMode: AppState.examMode || 'neetpg',
      sessionMode: AppState.sessionMode || 'practice',
      setupMode: AppState.setupMode || 'ai',
      aiScope: AppState.aiScope || 'grand',
      aiSelectedSubjects: AppState.aiSelectedSubjects || [],
      aiSelectedSystems: AppState.aiSelectedSystems || [],
      aiCustomTopic: (DOM.inputAiCustomTopic ? DOM.inputAiCustomTopic.value : '') || AppState.aiCustomTopic || '',
      aiQuestionCount: AppState.aiQuestionCount || 10,
      aiDifficulty: AppState.aiDifficulty || 'balanced',
      aiStyle: AppState.aiStyle || 'mixed',
      reviewMasterTab: AppState.reviewMasterTab || 'tab-question-review',
      analyticsSubtab: AppState.analyticsSubtab || 'tab-triage-matrix',
      reviewActiveQuestionId: AppState.reviewActiveQuestionId || null,
      reviewFilters: AppState.reviewFilters || {},
      viewingAttemptId: AppState.viewingAttemptId || null,
      historyFilterExam: AppState.historyFilterExam || 'all',
      historySortOrder: AppState.historySortOrder || 'latest'
    };

    if (AppState.view === 'review' && AppState.examData && AppState.responses) {
      payload.reviewExamData = AppState.examData;
      payload.reviewResponses = AppState.responses;
    }

    localStorage.setItem('triage_app_state', JSON.stringify(payload));
  } catch (e) {
    console.warn('Could not persist app state:', e);
  }
}

function checkPersistedSession() {
  checkPersistedState();
}

function checkPersistedState() {
  const rawState = localStorage.getItem('triage_app_state');
  const rawExam = localStorage.getItem('triage_exam_session');
  let savedState = null;
  if (rawState) {
    try {
      savedState = JSON.parse(rawState);
    } catch (e) {}
  }

  const hash = (typeof window !== 'undefined' && window.location) ? window.location.hash : '';

  // 1. In-progress active exam session restoration
  if (rawExam) {
    try {
      const data = JSON.parse(rawExam);
      if (data && data.examData && data.responses && data.examData.sections && data.examData.sections.length > 0) {
        AppState.examMode = data.examMode || 'neetpg';
        AppState.sessionMode = data.sessionMode || 'practice';
        AppState.isSampleTest = Boolean(data.isSampleTest);
        AppState.practiceElapsedTime = data.practiceElapsedTime || 0;
        AppState.examData = data.examData;
        AppState.activeSectionIndex = data.activeSectionIndex || 0;
        AppState.activeQuestionIndex = data.activeQuestionIndex || 0;
        AppState.sectionTimesLeft = data.sectionTimesLeft || {};
        AppState.responses = data.responses || {};
        AppState.sectionStatus = data.sectionStatus || {};

        updateExamModeUI();
        switchView('exam');
        renderSectionTabs();
        loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
        startActiveSectionTimer();
        return;
      } else {
        localStorage.removeItem('triage_exam_session');
      }
    } catch (e) {
      localStorage.removeItem('triage_exam_session');
    }
  }

  // 2. Hash #setup / #home explicit override - prioritize setup view if user navigated to #setup
  if (hash === '#setup' || hash === '#home') {
    restoreHomeState(savedState);
    return;
  }

  // 3. Review View restoration
  if (savedState && savedState.view === 'review') {
    AppState.view = 'review';
    AppState.historySortOrder = savedState.historySortOrder || 'latest';
    AppState.historyFilterExam = savedState.historyFilterExam || 'all';
    AppState.reviewFilters = Object.assign({}, AppState.reviewFilters, savedState.reviewFilters || {});

    // Ensure review view is activated
    switchView('review');

    // Case A: Reviewing an archived attempt from history
    if (savedState.viewingAttemptId && AppState.sessionHistory && AppState.sessionHistory.length > 0) {
      const attempt = AppState.sessionHistory.find(a => a.id === savedState.viewingAttemptId);
      if (attempt) {
        viewPastAttempt(attempt.id);
        const targetMasterTab = savedState.reviewMasterTab || 'tab-question-review';
        switchMasterReviewTab(targetMasterTab);
        if (targetMasterTab === 'tab-analytics-master' && savedState.analyticsSubtab) {
          switchAnalyticsSubtab(savedState.analyticsSubtab);
        }
        if (savedState.reviewActiveQuestionId) {
          AppState.reviewActiveQuestionId = savedState.reviewActiveQuestionId;
          renderFilteredReviewQuestions();
        }
        return;
      }
    }

    // Case B: Reviewing a completed test (live session or latest attempt)
    let reviewExamData = savedState.reviewExamData;
    let reviewResponses = savedState.reviewResponses;
    if ((!reviewExamData || !reviewResponses) && AppState.sessionHistory && AppState.sessionHistory.length > 0) {
      const latest = AppState.sessionHistory[AppState.sessionHistory.length - 1];
      reviewExamData = latest.examData;
      reviewResponses = latest.responses;
      if (!savedState.examMode) AppState.examMode = latest.examMode || 'neetpg';
    }

    if (reviewExamData && reviewResponses) {
      AppState.examData = reviewExamData;
      AppState.responses = reviewResponses;
      if (savedState.examMode) AppState.examMode = savedState.examMode;

      populateFilterDropdowns();
      calculateAndRenderKPIs();
      calculateAndRenderTriageMatrix();

      // Apply saved filter values to dropdowns
      if (DOM.filterMatrix && AppState.reviewFilters.matrix) DOM.filterMatrix.value = AppState.reviewFilters.matrix;
      if (DOM.filterResult && AppState.reviewFilters.result) DOM.filterResult.value = AppState.reviewFilters.result;
      if (DOM.filterConfidence && AppState.reviewFilters.confidence) DOM.filterConfidence.value = AppState.reviewFilters.confidence;
      if (DOM.filterBookmark && AppState.reviewFilters.bookmark) DOM.filterBookmark.value = AppState.reviewFilters.bookmark;
      if (DOM.filterSection && AppState.reviewFilters.section) DOM.filterSection.value = AppState.reviewFilters.section;
      if (DOM.filterSubject && AppState.reviewFilters.subject) DOM.filterSubject.value = AppState.reviewFilters.subject;
      if (DOM.filterSystem && AppState.reviewFilters.system) DOM.filterSystem.value = AppState.reviewFilters.system;
      if (DOM.filterDifficulty && AppState.reviewFilters.difficulty) DOM.filterDifficulty.value = AppState.reviewFilters.difficulty;
      if (DOM.filterFormat && AppState.reviewFilters.format) DOM.filterFormat.value = AppState.reviewFilters.format;

      const targetMasterTab = savedState.reviewMasterTab || 'tab-question-review';
      switchMasterReviewTab(targetMasterTab);

      if (targetMasterTab === 'tab-analytics-master' && savedState.analyticsSubtab) {
        switchAnalyticsSubtab(savedState.analyticsSubtab);
      }
      if (savedState.reviewActiveQuestionId) {
        AppState.reviewActiveQuestionId = savedState.reviewActiveQuestionId;
      }
      renderFilteredReviewQuestions();
      updateResetFilterState();
      return;
    } else {
      // Review view active without loaded test (e.g. user was directly viewing History tab)
      const targetMasterTab = savedState.reviewMasterTab || 'tab-history';
      switchMasterReviewTab(targetMasterTab);
      return;
    }
  }

  // 4. Default: Home / Setup View restoration
  restoreHomeState(savedState);
}

function restoreHomeState(savedState) {
  const hash = (typeof window !== 'undefined' && window.location) ? window.location.hash : '';
  const targetView = (hash === '#setup' || (savedState && savedState.view === 'setup')) ? 'setup' : 'home';
  switchView(targetView);
  if (savedState) {
    if (savedState.customTestName) {
      AppState.customTestName = savedState.customTestName;
      if (DOM.inputTestName) DOM.inputTestName.value = savedState.customTestName;
    }
    if (savedState.examMode && ['neetpg', 'inicet'].includes(savedState.examMode)) {
      setExamMode(savedState.examMode, false);
    }
    if (savedState.sessionMode && ['practice', 'simulation'].includes(savedState.sessionMode)) {
      setSessionMode(savedState.sessionMode, false);
    }
    if (savedState.setupMode && ['ai', 'sample', 'manual'].includes(savedState.setupMode)) {
      switchSetupMode(savedState.setupMode);
    }
    if (savedState.aiScope && ['grand', 'custom'].includes(savedState.aiScope)) {
      AppState.aiScope = savedState.aiScope;
      if (DOM.selectAiScope) DOM.selectAiScope.value = savedState.aiScope;
      if (typeof setAiScope === 'function') setAiScope(savedState.aiScope);
    }
    if (Array.isArray(savedState.aiSelectedSubjects)) {
      AppState.aiSelectedSubjects = savedState.aiSelectedSubjects;
    }
    if (Array.isArray(savedState.aiSelectedSystems)) {
      AppState.aiSelectedSystems = savedState.aiSelectedSystems;
    }
    if (savedState.aiCustomTopic && DOM.inputAiCustomTopic) {
      DOM.inputAiCustomTopic.value = savedState.aiCustomTopic;
    }
    if (savedState.aiDifficulty && DOM.selectAiDifficulty) {
      AppState.aiDifficulty = savedState.aiDifficulty;
      DOM.selectAiDifficulty.value = savedState.aiDifficulty;
    }
    if (savedState.aiStyle && DOM.selectAiStyle) {
      AppState.aiStyle = savedState.aiStyle;
      DOM.selectAiStyle.value = savedState.aiStyle;
    }
    if (savedState.aiQuestionCount) {
      AppState.aiQuestionCount = savedState.aiQuestionCount;
      if (DOM.aiCountPresets) {
        DOM.aiCountPresets.querySelectorAll('.btn-count-preset').forEach(btn => {
          btn.classList.toggle('active', parseInt(btn.dataset.count, 10) === savedState.aiQuestionCount);
        });
      }
      if (DOM.inputAiCustomCount) {
        DOM.inputAiCustomCount.value = savedState.aiQuestionCount;
      }
    }
    if (savedState.historySortOrder) {
      AppState.historySortOrder = savedState.historySortOrder;
    }
    if (savedState.historyFilterExam) {
      AppState.historyFilterExam = savedState.historyFilterExam;
    }

    renderSubjectChips();
    renderSystemChips();
    updateScopeBadges();
    updateAiSizingBreakdown();
    updateAiConfigSummary();
  }

  updateStepHeaderBadges();
  toggleSetupStep(1, true);
}

document.addEventListener('DOMContentLoaded', initApp);
