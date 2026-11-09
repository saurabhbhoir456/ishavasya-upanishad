(() => {
    const marathiMeanings = {
        1: "या विश्वातील जे काही बदलते किंवा गतिमान आहे, ते सर्व परमेश्वराने व्यापलेले आहे. त्यागभावाने स्वतःचे रक्षण करा आणि जीवनाचा आनंद घ्या; कोणाच्याही संपत्तीचा लोभ धरू नका.",
        2: "या जगात कर्मे करीतच माणसाने शंभर वर्षे जगण्याची इच्छा करावी. तुझ्यासाठी हाच मार्ग आहे; याहून दुसरा नाही. अशा रीतीने कर्म माणसाला बांधून ठेवत नाही.",
        3: "अंधकाराने झाकलेली, सूर्यप्रकाशरहित जगं असुरांची म्हणतात. आत्मस्वरूप न जाणणारे जे लोक आहेत, ते मृत्यूनंतर त्या जगांना जातात.",
        4: "ते एक आत्मतत्त्व स्थिर असूनही मनापेक्षा वेगवान आहे. इंद्रिये त्याच्यापर्यंत पोहोचू शकत नाहीत, कारण ते त्यांच्याही पुढे आहे. स्वतः स्थिर राहून ते धावणाऱ्यांनाही मागे टाकते; त्याच्यामध्ये मातरिश्वा जलतत्त्वाला धारण करतो.",
        5: "ते चालते आणि चालतही नाही; ते दूर आहे आणि जवळही आहे. ते या सर्वांच्या आत आहे आणि या सर्वांच्या बाहेरही आहे.",
        6: "जो सर्व भूतमात्रांना आत्म्यामध्येच पाहतो आणि सर्व भूतमात्रांमध्ये आत्म्याला पाहतो, तो कोणाचाही तिरस्कार करत नाही किंवा कोणापासून दूर जात नाही.",
        7: "ज्या ज्ञानी व्यक्तीला सर्व भूतमात्र आत्माच झालेले दिसतात आणि जी एकत्व पाहते, तिच्यासाठी मग मोह कोणता आणि शोक कोणता?",
        8: "त्या एकाने सर्वत्र व्याप्ती केली आहे. तो तेजस्वी, देहरहित, जखम व स्नायूंविरहित, शुद्ध आणि पापाने अस्पर्शित आहे. तो सर्वज्ञ, विचारशील, सर्वांवर अधिष्ठित आणि स्वयंभू असून त्याने सनातन काळासाठी प्रत्येक वस्तूचे यथायोग्य नियोजन केले आहे.",
        9: "जे अविद्येची उपासना करतात ते अंधकारात प्रवेश करतात; आणि जे केवळ विद्येमध्येच रममाण होतात ते जणू त्याहूनही गडद अंधारात जातात. ‘विद्या’ आणि ‘अविद्या’ यांचे नेमके अर्थ वेगवेगळ्या वेदान्तपरंपरांमध्ये वेगवेगळे समजले जातात.",
        10: "विद्येमुळे एक फल मिळते आणि अविद्येमुळे दुसरे फल मिळते, असे ज्ञानी सांगतात. ज्यांनी आम्हाला हे समजावून सांगितले, त्या ज्ञानींकडून आम्ही असे ऐकले आहे.",
        11: "जो विद्या आणि अविद्या या दोन्हींचे एकत्र ज्ञान घेतो, तो अविद्येद्वारे मृत्यू ओलांडतो आणि विद्येद्वारे अमरत्व प्राप्त करतो.",
        12: "जे असंभूतीची उपासना करतात ते अंधकारात प्रवेश करतात; आणि जे संभूतीमध्येच रममाण होतात ते जणू त्याहूनही गडद अंधारात जातात. या संज्ञांचे अर्थ परंपरेनुसार भिन्न आहेत.",
        13: "संभवामुळे एक फल मिळते आणि असंभवामुळे दुसरे फल मिळते, असे ज्ञानी सांगतात. ज्यांनी आम्हाला हे समजावून सांगितले, त्या ज्ञानींकडून आम्ही असे ऐकले आहे.",
        14: "जो संभूती आणि विनाश या दोन्हींचे एकत्र ज्ञान घेतो, तो विनाशाद्वारे मृत्यू ओलांडतो आणि संभूतीद्वारे अमरत्व प्राप्त करतो. या संस्कृत संज्ञांचे पारंपरिक अर्थ एकापेक्षा अधिक आहेत.",
        15: "सत्याचे मुख सुवर्णपात्राने झाकलेले आहे. हे पूषन्, सत्यधर्माचे आचरण करणाऱ्या मला दर्शन व्हावे म्हणून ते आवरण दूर करा.",
        16: "हे पूषन्, एकमेव द्रष्ट्या, नियंत्या, सूर्यदेवा, प्रजापतीपुत्रा, तुमचे किरण बाजूला करा आणि तेज एकवटून घ्या, म्हणजे मला तुमचे परम मंगलमय रूप पाहता येईल. तेथे जो पुरुष आहे, तोच मी आहे.",
        17: "वायू अमर प्राणतत्त्वात विलीन होवो; हे शरीर राख होणारे आहे. ॐ, हे संकल्पशक्ती, केलेल्या कर्मांची आठवण ठेव—आठवण ठेव. हे संकल्पशक्ती, केलेल्या कर्मांची आठवण ठेव—आठवण ठेव.",
        18: "हे अग्ने, सर्व मार्ग जाणणाऱ्या देवा, आम्हाला कल्याणाच्या मार्गाने समृद्धीकडे घेऊन चला. आमच्यातील वाकडेपणाने प्रेरित पाप दूर करा. आम्ही तुम्हाला सर्वोच्च वंदन अर्पण करतो."
    };

    const pageStarts = {
        "module-1.html": 1,
        "module-2.html": 4,
        "module-3.html": 9,
        "module-4.html": 15
    };

    const pageName = window.location.pathname.split("/").pop().toLowerCase();
    let nextVerse = pageStarts[pageName] || 1;
    const meaningBlocks = [];
    const translationHeadings = document.querySelectorAll("h3, h4");

    translationHeadings.forEach((heading) => {
        const label = heading.textContent.trim();
        if (!/^(English Translation(?:\s*[—-]\s*Mantra\s*\d+)?|Translation)$/i.test(label)) {
            return;
        }

        const englishMeaning = heading.nextElementSibling;
        if (!englishMeaning || englishMeaning.tagName !== "P") {
            throw new Error(`Missing translation paragraph for "${label}".`);
        }

        const labeledVerse = label.match(/Mantra\s+(\d+)/i);
        const verse = labeledVerse ? Number(labeledVerse[1]) : nextVerse;
        const marathiText = marathiMeanings[verse];
        if (!marathiText) {
            throw new Error(`Missing Marathi meaning for verse ${verse}.`);
        }

        const marathiMeaning = englishMeaning.cloneNode(false);
        marathiMeaning.classList.add("font-devanagari");
        marathiMeaning.lang = "mr";
        marathiMeaning.hidden = true;
        marathiMeaning.textContent = marathiText;
        englishMeaning.after(marathiMeaning);

        meaningBlocks.push({ heading, englishMeaning, marathiMeaning, verse, originalLabel: label });
        nextVerse = verse + 1;
    });

    const header = document.querySelector("header");
    if (!header) {
        throw new Error("Cannot add the meaning language selector: page header not found.");
    }

    const languageBar = document.createElement("div");
    languageBar.className = "border-t border-amber-100 bg-white px-4 py-2";
    languageBar.innerHTML = `
        <div class="mx-auto flex max-w-7xl items-center justify-end gap-2 text-sm">
            <span class="mr-1 text-stone-600">Meaning:</span>
            <button type="button" data-meaning-language="en" aria-pressed="true" class="rounded-md border border-amber-200 bg-amber-50 px-3 py-1.5 font-medium text-stone-700 hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700">English</button>
            <button type="button" data-meaning-language="mr" aria-pressed="false" class="rounded-md border border-amber-200 bg-white px-3 py-1.5 font-medium text-stone-700 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700">मराठी</button>
        </div>`;
    header.append(languageBar);

    const languageButtons = languageBar.querySelectorAll("[data-meaning-language]");
    const setLanguage = (language) => {
        const useMarathi = language === "mr";
        meaningBlocks.forEach(({ heading, englishMeaning, marathiMeaning, verse, originalLabel }) => {
            englishMeaning.hidden = useMarathi;
            marathiMeaning.hidden = !useMarathi;
            heading.textContent = useMarathi
                ? `मराठी अर्थ${meaningBlocks.length > 1 || originalLabel.includes("Mantra") ? ` — मंत्र ${verse}` : ""}`
                : originalLabel;
        });

        languageButtons.forEach((button) => {
            const isSelected = button.dataset.meaningLanguage === language;
            button.setAttribute("aria-pressed", String(isSelected));
            button.classList.toggle("bg-amber-50", isSelected);
            button.classList.toggle("bg-white", !isSelected);
        });
        localStorage.setItem("ishavasya-meaning-language", language);
    };

    const savedLanguage = localStorage.getItem("ishavasya-meaning-language");
    setLanguage(savedLanguage === "mr" ? "mr" : "en");
    languageButtons.forEach((button) => {
        button.addEventListener("click", () => setLanguage(button.dataset.meaningLanguage));
    });
})();
