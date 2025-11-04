// Loneliness - DJG-6 ================================================
const items_djg = {
    DJG_Emotional_1: "I experience a general sense of emptiness",
    DJG_Emotional_2: "I miss having people around me",
    DJG_Emotional_3: "I often feel rejected",
    DJG_Social_4_R: "There are plenty of people I can rely on when I have problems",
    DJG_Social_5_R: "There are many people I can trust completely",
    DJG_Social_6_R: "There are enough people I feel close to"
}

function make_djg(items, required = true) {
    items = shuffleObject(items)
    questions = []

    // Make questions
    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            displayMode: "buttons",
            isRequired: required,
            rateValues: [
                {
                    value: 0,
                    text: "No",
                },
                {
                    value: 1,
                    text: "More or less",
                },
                {
                    value: 2,
                    text: "Yes",
                },
            ],
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_loneliness = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About how you feel",
            description:
                "Please indicate for each of the statements, the extent to which they apply to your situation, the way you feel now.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_djg(items_djg),
        }
    },
    data: {
        screen: "questionnaire_loneliness",
    },
}

// Psychiatric Disorders ================================================
const questionnaire_mentalhealth = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Mental health",
        completeText: "Continue",
        pageNextText: "Next",
        pagePrevText: "Previous",
        goNextPageAutomatic: true,
        showQuestionNumbers: false,
        // showProgressBar: "aboveHeader",
        pages: [
            {
                elements: [
                    {
                        title: "Are you currently living with one of the following medically diagnosed difficulty?",
                        name: "Disorders_Psychiatric",
                        type: "checkbox",
                        choices: [
                            "Addiction (e.g., Alcohol, Drugs, Gambling, ...)",
                            "Attention Deficit Hyperactivity Disorder (ADHD)",
                            "Autism",
                            "Bipolar Disorder",
                            "Borderline Personality Disorder (BPD)",
                            "Generalized Anxiety Disorder (GAD)",
                            "Major Depressive Disorder (MDD)",
                            "Obsessive-Compulsive Disorder (OCD)",
                            "Panic Disorder",
                            "Post-Traumatic Stress Disorder (PTSD)",
                            "Schizophrenia",
                            "Social Anxiety Disorder (Social Phobia)",
                            "Specific Phobias",
                            "Eating Disorders (e.g., Anorexia, Bulimia, ...)",
                            // "Dysthymia (Persistent Depressive Disorder)",
                            // "Seasonal Affective Disorder (SAD)",
                            // "Premenstrual Dysphoric Disorder (PMDD)",
                            // "Substance/Medication-Induced Mood Disorder",
                            // "Mood Disorder Due to a General Medical Condition",
                            // "Disruptive Mood Dysregulation Disorder",
                            // "Adjustment Disorder with Depressed Mood",
                            // "Agoraphobia",
                            // "Separation Anxiety Disorder",
                            // "Selective Mutism",
                            // "Acute Stress Disorder",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        visibleIf: "{Disorders_Psychiatric} notempty and {Disorders_Psychiatric} notcontains 'None'",
                        title: "Are you currently undergoing any of the following treatments",
                        name: "Disorders_PsychiatricTreatment",
                        type: "checkbox",
                        choices: [
                            "Antidepressant Medication (e.g., PROZAC, ZOLOFT, EFFEXOR...)",
                            "Anxiolytic Medication (e.g., XANAX, VALIUM, ...)",
                            "Psychotherapy/Counselling (e.g., CBT, ACT, ...)",
                            "Mood Stabilizers (e.g., LITHIUM, LAMICTAL, ...)",
                            "Antipsychotic Medication (e.g., RISPERDAL, SEROQUEL, ...)",
                            // "Electroconvulsive Therapy (ECT)",
                            // "Transcranial Magnetic Stimulation (TMS)",
                            "Lifestyle Changes (e.g., diet, exercise, ...)",
                            "Mindfulness and Stress Management Techniques",
                            "Alternative Therapies (e.g., acupuncture, herbal remedies, ...)",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                ],
            },
        ],
    },
    data: {
        screen: "questionnaire_mentalhealth",
    },
}

// Psychosomatic disorders ===================================================
const questionnaire_somatichealth = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Medical and somatic difficulties",
        completeText: "Continue",
        pageNextText: "Next",
        pagePrevText: "Previous",
        goNextPageAutomatic: true,
        showQuestionNumbers: false,
        // showProgressBar: "aboveHeader",
        pages: [
            {
                elements: [
                    {
                        name: "Disorders_Somatic_Instructions",
                        html: "Are you currently living with one of the following medically diagnosed condition?",
                        type: "html",
                    },
                    {
                        title: "Musculoskeletal and pain",
                        name: "Disorders_Somatic_Musculoskeletal",
                        type: "checkbox",
                        choices: [
                            "Hypermobility Syndrome (e.g., Ehlers-Danlos Syndrome)",
                            "Fibromyalgia",
                            "Chronic Fatigue Syndrome",
                            "Chronic Pain Syndrome",
                            "Back Pain",
                            "Muscle Tension",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Dermatological and skin",
                        name: "Disorders_Somatic_Dermatological",
                        type: "checkbox",
                        choices: ["Skin Rashes", "Eczema", "Psoriasis", "Sjogren's Syndrome"],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Cardiovascular",
                        name: "Disorders_Somatic_Cardiovascular",
                        type: "checkbox",
                        choices: [
                            "Chest Pain",
                            "Cardiac Arrhythmia (palpitations)",
                            "Hypertension (High Blood Pressure)",
                            "Hypotension (Low Blood Pressure)",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Gastrointestinal",
                        name: "Disorders_Somatic_Gastrointestinal",
                        type: "checkbox",
                        choices: [
                            "Irritable Bowel Syndrome (IBS)",
                            "Gastroesophageal Reflux Disease (GERD)",
                            "Crohn's Disease",
                            "Ulcerative Colitis",
                            "Celiac Disease",
                            "Gluten Intolerance",
                            "Lactose Intolerance",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Respiratory",
                        name: "Disorders_Somatic_Respiratory",
                        type: "checkbox",
                        choices: [
                            "Shortness of Breath",
                            "Asthma",
                            "Chronic Obstructive Pulmonary Disease (COPD)",
                            "Sleep Apnea",
                            "Chronic Bronchitis",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Neurological",
                        name: "Disorders_Somatic_Neurological",
                        type: "checkbox",
                        choices: [
                            "Nausea/Vomiting",
                            "Dizziness/Lightheadedness",
                            "Migraine",
                            "Neuropathy",
                            "Epilepsy",
                            "Multiple Sclerosis (MS)",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Genitourinary",
                        name: "Disorders_Somatic_Genitourinary",
                        type: "checkbox",
                        choices: ["Frequent Urination", "Endometriosis", "Interstitial Cystitis", "Chronic Pelvic Pain Syndrome"],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                ],
            },
        ],
    },
    data: {
        screen: "questionnaire_somatichealth",
    },
}