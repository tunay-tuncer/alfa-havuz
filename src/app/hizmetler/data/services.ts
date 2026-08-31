export interface Service {
    id: number;
    slug: string;
    number: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    features: string[];
}

export const services: Service[] = [
    {
        id: 1,
        slug: "anahtar-teslim-havuz",
        number: "01",
        title: "ANAHTAR TESLİM HAVUZ",
        shortDescription:
            "Tasarım, uygulama ve tüm teknik altyapısıyla komple havuz çözümleri.",
        description:
            "Projenizin mimari yapısına ve kullanım ihtiyaçlarına uygun havuz sistemlerini tasarlıyor, tüm uygulama ve teknik altyapı süreçlerini tek çatı altında yönetiyoruz.",
        image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1400&q=85",
        features: [
            "Konsept ve teknik tasarım",
            "Havuz mekanik altyapısı",
            "Filtrasyon ve sirkülasyon sistemleri",
            "Aydınlatma sistemleri",
            "Test ve devreye alma",
        ],
    },
    {
        id: 2,
        slug: "isi-pompasi-sistemleri",
        number: "02",
        title: "ISI POMPASI SİSTEMLERİ",
        shortDescription:
            "Yüksek verimli ısıtma çözümleri ile dört mevsim havuz konforu.",
        description:
            "Enerji verimliliğini ve kullanım konforunu ön planda tutarak havuzlarınız için doğru ısı pompası çözümünü projelendiriyor ve uyguluyoruz.",
        image: "https://images.unsplash.com/photo-1698031610511-c7a35d121b17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: [
            "Havuz ısıtma sistemleri",
            "Isı pompası seçimi",
            "Enerji verimliliği",
            "Otomatik sıcaklık kontrolü",
            "Devreye alma ve bakım",
        ],
    },
    {
        id: 3,
        slug: "sogutma-sistemleri",
        number: "03",
        title: "SOĞUTMA SİSTEMLERİ",
        shortDescription:
            "Modern ve verimli soğutma sistemleri ile yaşam alanlarında maksimum konfor.",
        description:
            "Villa, otel ve özel projeler için yapının ihtiyaçlarına uygun, konfor ve enerji verimliliğini birlikte sağlayan soğutma çözümleri sunuyoruz.",
        image: "https://images.unsplash.com/photo-1569875875269-6943dc3154c4?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: [
            "Villa soğutma sistemleri",
            "Otel çözümleri",
            "İklimlendirme altyapısı",
            "Enerji verimliliği",
            "Teknik servis",
        ],
    },
    {
        id: 4,
        slug: "filtrasyon-sistemleri",
        number: "04",
        title: "FİLTRASYON SİSTEMLERİ",
        shortDescription:
            "Kristal berraklığında su için doğru projelendirilmiş filtrasyon sistemleri.",
        description:
            "Havuzun boyutu, kullanım yoğunluğu ve proje özelliklerine göre filtrasyon ve sirkülasyon altyapısını doğru şekilde projelendiriyoruz.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
        features: [
            "Filtrasyon sistemleri",
            "Pompa ve sirkülasyon",
            "Otomatik dozaj",
            "Su kalitesi kontrolü",
            "Periyodik bakım",
        ],
    },
    {
        id: 5,
        slug: "bakim-teknik-servis",
        number: "05",
        title: "BAKIM & TEKNİK SERVİS",
        shortDescription:
            "Sistemlerin uzun ömürlü ve verimli çalışması için sürekli teknik destek.",
        description:
            "Proje tamamlandıktan sonra da sistemlerin performansını korumak için düzenli bakım, kontrol ve teknik servis desteği sağlıyoruz.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
        features: [
            "Periyodik bakım",
            "Arıza tespiti",
            "Sistem kontrolü",
            "Parça değişimi",
            "7/24 teknik destek",
        ],
    },
];
