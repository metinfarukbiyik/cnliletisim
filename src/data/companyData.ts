import React from 'react';
import { FaSearchLocation, FaNetworkWired, FaSignal, FaBroadcastTower } from 'react-icons/fa';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  services: Service[];
  partners: {
    name: string;
    logo: string;
  }[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  about: {
    title: string;
    content: string[];
  };
}

export const companyData: CompanyInfo = {
  name: "CNL İletişim Elektrik ve Elektronik",
  tagline: "Baz İstasyonu Kurulum ve Revizyon Hizmetleri",
  description: "Vodafone ve Turkcell baz istasyonlarına profesyonel kurulum ve revizyon hizmetleri sunuyoruz. Teknolojik altyapı çözümlerinde güvenilir ortağınız.",
  services: [
    {
      id: 1,
      title: "Baz İstasyonu Kurulumu",
      description: "Profesyonel ekip ve teknolojik ekipmanlarla baz istasyonu kurulum hizmetleri.",
      icon: FaBroadcastTower,
      features: [
        "Anten kurulumu ve montajı",
        "Ekipman yerleşimi ve konfigürasyon",
        "Kablo tesisatı ve bağlantılar",
        "Site hazırlama ve altyapı",
        "Test ve devreye alma"
      ]
    },
    {
      id: 2,
      title: "Survey",
      description: "Saha analizleri ve teknik değerlendirme hizmetleri ile optimal çözümler sunuyoruz.",
      icon: FaSearchLocation,
      features: [
        "Saha keşif ve analizi",
        "Teknik ölçüm ve raporlama",
        "Fizibilite çalışmaları",
        "Proje planlama desteği"
      ]
    },
    {
      id: 3,
      title: "GSM Network",
      description: "GSM ağ altyapısı için eksiksiz kurulum ve bakım hizmetleri.",
      icon: FaNetworkWired,
      features: [
        "Kurulum",
        "Söküm",
        "Revizyon",
        "Devreye Alma",
        "Kabul Süreçleri ve Dosya Hazırlama"
      ]
    },
    {
      id: 4,
      title: "Transmisyon",
      description: "İletişim altyapısı transmisyon sistemleri için profesyonel hizmetler.",
      icon: FaSignal,
      features: [
        "Kurulum",
        "Söküm",
        "Revizyon",
        "Devreye Alma",
        "Kabul Süreçleri ve Dosya Hazırlama"
      ]
    }
  ],
  partners: [
    {
      name: "Vodafone",
      logo: "Vodafone"
    },
    {
      name: "Turkcell",
      logo: "Turkcell"
    }
  ],
  contact: {
    phone: "+90 (533) 656 99 04",
    email: "osman.cinel@cnliletisim.com",
    address: "Fatih Mh. Meşale Sk. Çilem Apt. No: 8/A Ortahisar/TRABZON"
  },
  about: {
    title: "CNL İletişim Hakkında",
    content: [
      "CNL İletişim, baz istasyonu kurulum ve revizyon alanında uzmanlaşmış, teknoloji odaklı bir şirkettir. Vodafone ve Turkcell gibi önde gelen telekomünikasyon operatörleriyle çalışarak, sektörde güvenilir bir konuma sahiptir.",
      "Deneyimli ekibimiz ve modern teknolojik altyapımızla, baz istasyonu kurulumundan revizyon işlemlerine kadar geniş bir hizmet yelpazesi sunuyoruz. Müşteri memnuniyeti ve kalite odaklı çalışma prensibimizle, her projede en yüksek standartları hedefliyoruz.",
      "Teknolojik yeniliklere açık, sürekli gelişen bir yapıya sahip olan CNL İletişim, telekomünikasyon altyapısının güçlendirilmesine katkıda bulunmaktadır."
    ]
  }
};
