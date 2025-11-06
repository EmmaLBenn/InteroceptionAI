const questionnaire_instructions = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Let's start",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "Instructions",
                        html:
                            "<div style='display: flex;'>" +
                            "<div style='width: 60%; margin-right: 20px;'>" +
                            "<h2>Instructions</h2>" +
                            "<p>In this study, you will be asked to complete various questionnaires. Please read each question carefully, and don't hesitate to take breaks in-between them.</p>" +
                            "<p>Please note that <b style='color:#FF5722;'>various checks will be performed to ensure the validity of the data</b>.</li>" +
                            "<p> We are aware that answering these questionnaires <b>might feel long and repetitive</b>, but having similar questions is necessary to ensure the validity of the results (we expect similar questions to be related, and opposite questions to be inversely related). " +
                            "</div>" +
                            "<div style='width: 40%;'>" +
                            "<img src='https://www.simplypsychology.org/wp-content/uploads/psychology.jpeg' alt='Illustration' style='width: 100%;'>" +
                            "</div>" +
                            "</div>",
                    },
                ],
            },
        ],
    },
}

// MINT Items ================================================
const items_mint = {
    MINT_Deficit_Urin_1:
        "I sometimes feel like I need to urinate or defecate but when I go to the bathroom I produce less than I expected",
    MINT_Deficit_Urin_2:
        "I often feel the need to urinate even when my bladder is not full",
    MINT_Deficit_Urin_3:
        "Sometimes I am not sure whether I need to go to the toilet or not (to urinate or defecate)",
    MINT_Deficit_CaCo_4:
        "Sometimes my breathing becomes erratic or shallow and I often don't know why",
    MINT_Deficit_CaCo_5:
        "I often feel like I can't get enough oxygen by breathing normally",
    MINT_Deficit_CaCo_6:
        "Sometimes my heart starts racing and I often don't know why",
    MINT_Deficit_CaNo_7:
        "I often only notice how I am breathing when it becomes loud",
    MINT_Deficit_CaNo_8:
        "I only notice my heart when it is thumping in my chest",
    MINT_Deficit_CaNo_9:
        "I often only notice how I am breathing when my breathing becomes shallow or irregular",
    MINT_Deficit_Olfa_10: "I often check the smell of my armpits",
    MINT_Deficit_Olfa_11: "I often check the smell of my own breath",
    MINT_Deficit_Olfa_12: "I often check the smell of my farts",
    MINT_Deficit_Sati_13:
        "I don't always feel the need to eat until I am really hungry",
    MINT_Deficit_Sati_14:
        "Sometimes I don't realise I was hungry until I ate something",
    MINT_Deficit_Sati_15:
        "I don't always feel the need to drink until I am really thirsty",
    MINT_Awareness_SexS_19:
        "During sex or masturbation, I often feel very strong sensations coming from my genital areas",
    MINT_Awareness_SexS_20:
        "When I am sexually aroused, I often notice specific sensations in my genital area (e.g., tingling, warmth, wetness, stiffness, pulsations)",
    MINT_Awareness_SexS_21:
        "My genital organs are very sensitive to pleasant stimulations",
    MINT_Awareness_SexO_22:
        "In general, I am very sensitive to changes in my genital organs",
    MINT_Awareness_SexO_23:
        "I can notice even very subtle changes in the state of my genital organs",
    MINT_Awareness_SexO_24:
        "I am always very aware of the state of my genital organs, even when I am calm",
    MINT_Awareness_UrSe_25:
        "In general, I am very aware of the sensations that are happening when I am urinating",
    MINT_Awareness_UrSe_26:
        "In general, I am very aware of the sensations that are happening when I am defecating",
    MINT_Awareness_UrSe_27:
        "I often experience a pleasant sensation when relieving myself when urinating or defecating)",
    MINT_Awareness_RelA_28: "I always know when I am relaxed",
    MINT_Awareness_RelA_29: "I always feel in my body if I am relaxed",
    MINT_Awareness_RelA_30:
        "My body is always in the same specific state when I am relaxed",
    MINT_Awareness_StaS_31:
        "Being relaxed is a very different bodily feeling compared to other states (e.g., feeling anxious, sexually aroused or after exercise)",
    MINT_Awareness_StaS_32:
        "Being sexually aroused is a very different bodily feeling compared to other states (e.g., feeling anxious, relaxed, or after physical exercise)",
    MINT_Awareness_StaS_33:
        "Being anxious is a very different bodily feeling compared to other states (e.g., feeling sexually aroused, relaxed or after exercise)",
    MINT_Awareness_ExAc_34:
        "I can always accurately feel when I am about to burp",
    MINT_Awareness_ExAc_35:
        "I can always accurately feel when I am about to fart",
    MINT_Awareness_ExAc_36:
        "I can always accurately feel when I am about to sneeze",
    MINT_Sensitivity_Card_37:
        "In general, I am very sensitive to changes in my heart rate",
    MINT_Sensitivity_Card_38:
        "I can notice even very subtle changes in the way my heart beats",
    MINT_Sensitivity_Card_39: "I often notice changes in my heart rate",
    MINT_Sensitivity_Resp_40:
        "I can notice even very subtle changes in my breathing",
    MINT_Sensitivity_Resp_41:
        "I am always very aware of how I am breathing, even when I am calm",
    MINT_Sensitivity_Resp_42:
        "In general, I am very sensitive to changes in my breathing",
    MINT_Sensitivity_Gast_46:
        "I can notice even very subtle changes in what my stomach is doing",
    MINT_Sensitivity_Gast_47:
        "In general, I am very sensitive to what my stomach is doing",
    MINT_Sensitivity_Gast_48:
        "I am always very aware of what my stomach is doing, even when I am calm",
    MINT_Sensitivity_Derm_49: "In general, my skin is very sensitive",
    MINT_Sensitivity_Derm_50:
        "My skin is susceptible to itchy fabrics and materials",
    MINT_Sensitivity_Derm_51:
        "I can notice even very subtle stimulations to my skin (e.g., very light touches)",
    MINT_AttentionCheck_1:
        "I can always accurately answer to the extreme left on this question to show that I am reading it",
}

// Generation code ================================================
// Convernience function to shuffle an object (used internally)
function shuffleObject(obj) {
    const entries = Object.entries(obj)
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[entries[i], entries[j]] = [entries[j], entries[i]]
    }
    return Object.fromEntries(entries)
}

// This function formats each question into a jsPsych-survey question that contains information about the question format
function make_mint(items, required = true, ticks = ["Disagree", "Agree"]) {
    items = shuffleObject(items)

    questions = []

    // Make questions
    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            displayMode: "buttons",
            // scaleColorMode: "colored",
            isRequired: required,
            minRateDescription: ticks[0],
            maxRateDescription: ticks[1],
            rateValues: [0, 1, 2, 3, 4, 5, 6],
        }
        questions.push(q)
    }

    return { elements: questions }
}

// MINT Questionnaire ================================================
const questionnaire_mint = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About you and your body",
            description:
                "Please answer the following questions based on how accurately each statement describes you in general.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_mint(items_mint),
        }
    },
    data: {
        screen: "questionnaire_mint",
    },
}


// BAIT ================================================

const items_bait = {
    BAIT_1_ImagesRealistic: "Current AI algorithms can generate very realistic images",
    BAIT_2_ImagesIssues: "Images of faces or people generated by AI always contain errors and artifacts",
    BAIT_3_VideosRealistic: "Videos generated by AI have obvious problems that make them easy to spot as fake",
    BAIT_4_VideosIssues: "Current AI algorithms can generate very realistic videos",
    BAIT_5_ImitatingReality: "Computer-Generated Images (CGI) are capable of perfectly imitating reality",
    BAIT_6_EnvironmentReal: "Technology allows the creation of environments that seem just as real as reality",
    BAIT_7_TextRealistic: "AI assistants can write texts that are indistinguishable from those written by humans",
    BAIT_8_TextIssues: "Documents and paragraphs written by AI usually read differently compared to Human productions",
    BAIT_9_NegativeAttitutes: "AI is dangerous",
    BAIT_10_NegativeAttitutes: "I am worried about future uses of AI",
    BAIT_11_PositiveAttitutes: "AI is exciting",
    BAIT_12_PositiveAttitutes: "Much of society will benefit from a future full of AI",
    // add attention check from FakeArt
}

function make_bait(items, required = true, ticks = ["Disagree", "Agree"]) {
    items = shuffleObject(items)

    questions = []

    // Make questions
    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            displayMode: "buttons",
            // scaleColorMode: "colored",
            isRequired: required,
            minRateDescription: ticks[0],
            maxRateDescription: ticks[1],
            rateValues: [0, 1, 2, 3, 4, 5, 6],
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_bait = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About Artificial Intelligence (AI)",
            description:
                "We are interested in your thoughts about Artificial Intelligence (AI). Please read the statements below carefully and indicate the extent to which you agree with each statement.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_bait(items_bait),
        }
    },
    data: {
        screen: "questionnaire_bait",
    },
}


// PHQ-4 ================================================

const items_phq4 = {
    PHQ4_Anxiety_1: "Feeling nervous, anxious or on edge",
    PHQ4_Anxiety_2: "Not being able to stop or control worrying",
    PHQ4_Depression_3: "Feeling down, depressed, or hopeless",
    PHQ4_Depression_4: "Little interest or pleasure in doing things",
}

const instructions_phq4 = {
    type: "html",
    name: "instructions_phq4",
    html: "<p>Over the <b>last 2 weeks</b>, how often have you been bothered by the following problems?</p>",
}

function make_phq4(items, required = true) {
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
                    text: "Not at all",
                },
                {
                    value: 0.5,
                    text: "Once or twice",
                },
                {
                    value: 1,
                    text: "Several days",
                },
                {
                    value: 2,
                    text: "More than half the days",
                },
                {
                    value: 3,
                    text: "Nearly every day",
                },
            ],
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_phq4 = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About your mood",
            description:
                "<p>Over the <b>last 2 weeks</b>, how often have you been bothered by the following problems?</p>",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_phq4(items_phq4),
        }
    },
    data: {
        screen: "questionnaire_phq4",
    },
}

// IRI ================================================

const items_IRI = {
    IRI_Cogntive_1: "I try to look at everybody's side of a disagreement before I make a decision.",
    IRI_Cogntive_2: "I sometimes try to understand my friends better by imagining how things look from their perspective.",
    IRI_Cogntive_3: "I believe that there are two sides to every question and try to look at them both.",
    IRI_Cognitive_4: "I sometimes find it difficult to see things from the 'other guy's' point of view.",
    IRI_Cognitive_5: "I try to look at things from the other person's point of view before making up my mind.",
    IRI_Cognitive_6: "When I'm upset at someone, I usually try to 'put myself in his shoes' for a while.",
    IRI_Cognitive_7: "Before criticising somebody, I try to imagine how I would feel if I were in their place.",
    IRI_Affective_1: "I often have tender, concerned feelings for people less fortunate than me.",
    IRI_Affective_2: "Sometimes I don't feel very sorry for other people when they are having problems.", 
    IRI_Affective_3: "When I see someone being taken advantage of, I feel kind of protective toward them.",
    IRI_Affective_4: "Other people's misfortunes do not usually disturb me a great deal.",
    IRI_Affective_5: "I am often quite touched by things that I see happen.",
    IRI_Affective_6: "I would describe myself as a pretty soft-hearted person.",
    IRI_Affective_7: "When I see someone being treated unfairly, I sometimes don't feel very much pity for them.",
}

function make_IRI(items, required = true, ticks = ["Describes me well", "Does not describe me well"]) {
    items = shuffleObject(items)

    questions = []

    // Make questions
    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            displayMode: "buttons",
            // scaleColorMode: "colored",
            isRequired: required,
            minRateDescription: ticks[0],
            maxRateDescription: ticks[1],
            rateValues: [0, 1, 2, 3, 4, 5],
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_IRI = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About your feelings",
            description:
                "We are interested in your thoughts and feelings. Please read the statements below carefully and indicate the extent each statement describe you.",
            showQuestionNumbers: false,
            goNextPageAutomatic: true,
            pages: make_bait(items_bait),
        }
    },
    data: {
        screen: "questionnaire_IRI",
    },
}



