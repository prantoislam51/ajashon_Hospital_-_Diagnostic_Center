// ============================================================
//  এই ফাইলটিই পুরো সাইটের তথ্যের উৎস / Single source of truth.
//  ✔ আসল (ছবি থেকে): নাম, সিরিয়ালের ফোন, ঠিকানা, ইমেইল/ওয়েব
//  ⚠ নমুনা (SAMPLE): ডাক্তার, ডিগ্রি, BMDC, সময়সূচি, টেস্ট, মূল্য, প্যাকেজ,
//     খোলার সময়, লাইসেন্স, গ্যালারির ক্যাপশন, FAQ — আসল তথ্য দিয়ে বদলান।
// ============================================================
const BD = '০১২৩৪৫৬৭৮৯';
export const bn = (v) => String(v).replace(/\d/g, (d) => BD[d]);
export const taka = (n) => ({ en: '৳ ' + n.toLocaleString('en-IN'), bn: '৳ ' + bn(n.toLocaleString('en-IN')) });
const x = (en, bnText) => ({ en, bn: bnText });

export const center = {
  name: x('Rajashon Hospital & Diagnostic Center', 'রাজাসন হসপিটাল এন্ড ডায়াগনস্টিক সেন্টার'),
  tagline: x('Accurate reports. Experienced doctors. Under one roof.', 'নির্ভুল রিপোর্ট, অভিজ্ঞ চিকিৎসক, এক ছাদের নিচে'),
  address: x('Holding No-163, Madhya Rajashon, Birulia Road, Savar, Dhaka', 'হোল্ডিং নং-১৬৩, মধ্য রাজাসন, বিরুলিয়া রোড, সাভার, ঢাকা'),
  landmark: x('Beside Rajashon Government Primary School', 'রাজাসন সরকারী প্রাথমিক স্কুল সংলগ্ন'),
  serialPhones: ['01334-945270', '01334-945271', '01334-945272'],
  email: 'rajashonhospital@gmail.com',
  whatsapp: '8801334945270', // ⚠ নিশ্চিত করুন: WhatsApp-এ এই নম্বর আছে কি না
  hours: x('Daily 7:00 AM – 10:00 PM (sample — please confirm)', 'প্রতিদিন সকাল ৭টা – রাত ১০টা (নমুনা — নিশ্চিত করুন)'),
  license: x('DGHS License No: XXXX (valid until XX/XX/XXXX)', 'DGHS লাইসেন্স নং: XXXX (মেয়াদ: XX/XX/XXXX)'),
  mapQuery: 'Madhya Rajashon, Birulia Road, Savar, Dhaka',
};

export const days = [
  x('Sunday','রবিবার'),x('Monday','সোমবার'),x('Tuesday','মঙ্গলবার'),x('Wednesday','বুধবার'),x('Thursday','বৃহস্পতিবার'),x('Friday','শুক্রবার'),x('Saturday','শনিবার')];
export const daysShort = [x('Sun','রবি'),x('Mon','সোম'),x('Tue','মঙ্গল'),x('Wed','বুধ'),x('Thu','বৃহ'),x('Fri','শুক্র'),x('Sat','শনি')];

function t12(h, m, lang) {
  const mm = String(m).padStart(2, '0');
  if (lang === 'en') return `${h % 12 || 12}:${mm} ${h < 12 ? 'AM' : 'PM'}`;
  const p = h < 5 ? 'ভোর' : h < 12 ? 'সকাল' : h < 15 ? 'দুপুর' : h < 17 ? 'বিকাল' : h < 19 ? 'সন্ধ্যা' : 'রাত';
  return `${p} ${bn(`${h % 12 || 12}:${mm}`)}`;
}
export const range = (f, t) => ({ en: `${t12(...f, 'en')} – ${t12(...t, 'en')}`, bn: `${t12(...f, 'bn')} – ${t12(...t, 'bn')}` });

export const departments = [
  { id:'medicine', ...x('Medicine','মেডিসিন') }, { id:'cardiology', ...x('Cardiology','কার্ডিওলজি') },
  { id:'gynae', ...x('Gynaecology & Obstetrics','গাইনি ও প্রসূতি') }, { id:'pediatrics', ...x('Pediatrics','শিশু রোগ') },
  { id:'ortho', ...x('Orthopedics','অর্থোপেডিক্স') }, { id:'radiology', ...x('Radiology & Imaging','রেডিওলজি ও ইমেজিং') },
  { id:'pathology', ...x('Pathology','প্যাথলজি') }, { id:'endo', ...x('Diabetes & Endocrinology','ডায়াবেটিস ও হরমোন') },
];

// ⚠ সব ডাক্তারের তথ্য নমুনা। days: 0=রবি … 6=শনি
export const doctors = [
  { slug:'dr-rahim-uddin', name:x('Dr. Rahim Uddin','ডা. রহিম উদ্দিন'), dept:'medicine', degrees:['MBBS','MD (Medicine)','FCPS'],
    designation:x('Associate Professor, Medicine','সহযোগী অধ্যাপক, মেডিসিন'), workplace:x('Dhaka Medical College Hospital','ঢাকা মেডিকেল কলেজ হাসপাতাল'),
    bmdc:'A-00000', exp:15, fee:800, room:x('Room 302','রুম ৩০২'),
    expertise:[x('Fever & infection','জ্বর ও সংক্রমণ'),x('High blood pressure','উচ্চ রক্তচাপ'),x('Diabetes','ডায়াবেটিস'),x('Breathing problems','শ্বাসকষ্ট')],
    schedule:[{days:[6,1,3], from:[17,0], to:[21,0]}], off:[5] },
  { slug:'dr-nusrat-jahan', name:x('Dr. Nusrat Jahan','ডা. নুসরাত জাহান'), dept:'gynae', degrees:['MBBS','FCPS (Gynae & Obs)'],
    designation:x('Consultant, Gynaecology','কনসালট্যান্ট, গাইনি ও প্রসূতি'), workplace:x('Bangabandhu Sheikh Mujib Medical University','বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়'),
    bmdc:'A-00000', exp:12, fee:1000, room:x('Room 204','রুম ২০৪'),
    expertise:[x('Antenatal care','গর্ভকালীন সেবা'),x('Infertility','বন্ধ্যাত্ব'),x('Menstrual problems','মাসিক সমস্যা'),x('Normal & caesarean delivery','নরমাল ও সিজারিয়ান ডেলিভারি')],
    schedule:[{days:[0,2,4], from:[10,0], to:[14,0]}], off:[5,6] },
  { slug:'dr-kamal-hossain', name:x('Dr. Kamal Hossain','ডা. কামাল হোসেন'), dept:'cardiology', degrees:['MBBS','MD (Cardiology)'],
    designation:x('Assistant Professor, Cardiology','সহকারী অধ্যাপক, কার্ডিওলজি'), workplace:x('National Institute of Cardiovascular Diseases','জাতীয় হৃদরোগ ইনস্টিটিউট'),
    bmdc:'A-00000', exp:14, fee:1200, room:x('Room 401','রুম ৪০১'),
    expertise:[x('Heart disease','হৃদরোগ'),x('ECG & echo review','ইসিজি ও ইকো ব্যাখ্যা'),x('Hypertension','উচ্চ রক্তচাপ'),x('Chest pain','বুকে ব্যথা')],
    schedule:[{days:[0,2], from:[18,0], to:[21,0]},{days:[4], from:[10,0], to:[13,0]}], off:[5] },
  { slug:'dr-farhana-akter', name:x('Dr. Farhana Akter','ডা. ফারহানা আক্তার'), dept:'pediatrics', degrees:['MBBS','DCH','MD (Pediatrics)'],
    designation:x('Consultant, Pediatrics','কনসালট্যান্ট, শিশু বিভাগ'), workplace:x('Dhaka Shishu Hospital','ঢাকা শিশু হাসপাতাল'),
    bmdc:'A-00000', exp:10, fee:700, room:x('Room 105','রুম ১০৫'),
    expertise:[x('Newborn care','নবজাতকের যত্ন'),x('Child vaccination','শিশুর টিকা'),x('Child fever & cough','শিশুর জ্বর ও কাশি'),x('Growth & nutrition','বৃদ্ধি ও পুষ্টি')],
    schedule:[{days:[6,0,1,2,3,4], from:[16,0], to:[20,0]}], off:[5] },
  { slug:'dr-imran-khan', name:x('Dr. Imran Khan','ডা. ইমরান খান'), dept:'ortho', degrees:['MBBS','MS (Orthopedics)'],
    designation:x('Assistant Professor, Orthopedics','সহকারী অধ্যাপক, অর্থোপেডিক্স'), workplace:x('National Institute of Traumatology & Orthopaedic Rehabilitation','জাতীয় অর্থোপেডিক হাসপাতাল ও পুনর্বাসন প্রতিষ্ঠান'),
    bmdc:'A-00000', exp:11, fee:1000, room:x('Room 305','রুম ৩০৫'),
    expertise:[x('Fractures','হাড় ভাঙা'),x('Joint pain','জয়েন্ট ব্যথা'),x('Spine problems','মেরুদণ্ডের সমস্যা'),x('Sports injuries','খেলাধুলাজনিত আঘাত')],
    schedule:[{days:[6,1,3], from:[18,0], to:[21,0]}], off:[5] },
  { slug:'dr-sadia-islam', name:x('Dr. Sadia Islam','ডা. সাদিয়া ইসলাম'), dept:'radiology', degrees:['MBBS','MD (Radiology & Imaging)'],
    designation:x('Consultant Radiologist','কনসালট্যান্ট রেডিওলজিস্ট'), workplace:x('Rajashon Hospital & Diagnostic Center','রাজাসন হসপিটাল এন্ড ডায়াগনস্টিক সেন্টার'),
    bmdc:'A-00000', exp:9, fee:600, room:x('Imaging Unit','ইমেজিং ইউনিট'),
    expertise:[x('Ultrasonography','আলট্রাসনোগ্রাফি'),x('X-ray reporting','এক্স-রে রিপোর্টিং'),x('CT scan reporting','সিটি স্ক্যান রিপোর্টিং')],
    schedule:[{days:[6,0,1,2,3,4], from:[9,0], to:[14,0]}], off:[5] },
  { slug:'dr-tanvir-ahmed', name:x('Dr. Tanvir Ahmed','ডা. তানভীর আহমেদ'), dept:'pathology', degrees:['MBBS','MPhil (Pathology)'],
    designation:x('Consultant Pathologist','কনসালট্যান্ট প্যাথলজিস্ট'), workplace:x('Rajashon Hospital & Diagnostic Center','রাজাসন হসপিটাল এন্ড ডায়াগনস্টিক সেন্টার'),
    bmdc:'A-00000', exp:13, fee:0, room:x('Laboratory','ল্যাব'),
    expertise:[x('Histopathology','হিস্টোপ্যাথলজি'),x('Hematology','হেমাটোলজি'),x('Clinical pathology','ক্লিনিক্যাল প্যাথলজি')],
    schedule:[{days:[6,0,1,2,3,4], from:[8,0], to:[16,0]}], off:[5] },
  { slug:'dr-mahmuda-begum', name:x('Dr. Mahmuda Begum','ডা. মাহমুদা বেগম'), dept:'endo', degrees:['MBBS','MD (Endocrinology)'],
    designation:x('Associate Professor, Endocrinology','সহযোগী অধ্যাপক, এন্ডোক্রাইনোলজি'), workplace:x('BIRDEM General Hospital','বারডেম জেনারেল হাসপাতাল'),
    bmdc:'A-00000', exp:16, fee:1000, room:x('Room 303','রুম ৩০৩'),
    expertise:[x('Diabetes','ডায়াবেটিস'),x('Thyroid','থাইরয়েড'),x('Hormonal problems','হরমোনজনিত সমস্যা'),x('Obesity','স্থূলতা')],
    schedule:[{days:[0,2,4], from:[16,0], to:[19,0]}], off:[5,6] },
];

export const testCats = [
  { id:'pathology', ...x('Pathology','প্যাথলজি') }, { id:'imaging', ...x('Imaging','ইমেজিং') },
  { id:'cardiac', ...x('Cardiac','কার্ডিয়াক') }, { id:'hormone', ...x('Hormone','হরমোন') },
];
const none = x('No preparation needed','প্রস্তুতি লাগে না'), sd = x('Same day','একই দিন');
// ⚠ নমুনা মূল্য
export const tests = [
  { name:x('CBC','সিবিসি (CBC)'), cat:'pathology', price:400, report:sd, prep:none },
  { name:x('Urine R/E','ইউরিন আর/ই'), cat:'pathology', price:200, report:sd, prep:x('First morning sample preferred','সকালের প্রথম প্রস্রাব ভালো') },
  { name:x('Blood sugar (fasting)','ব্লাড সুগার (ফাস্টিং)'), cat:'pathology', price:120, report:x('1 hour','১ ঘণ্টা'), prep:x('Fast 8–12 hours','৮–১২ ঘণ্টা খালি পেটে') },
  { name:x('HbA1c','এইচবিএ১সি (HbA1c)'), cat:'pathology', price:900, report:sd, prep:none },
  { name:x('Lipid profile','লিপিড প্রোফাইল'), cat:'pathology', price:1000, report:sd, prep:x('Fast 10–12 hours','১০–১২ ঘণ্টা খালি পেটে') },
  { name:x('Serum creatinine','সিরাম ক্রিয়েটিনিন'), cat:'pathology', price:350, report:sd, prep:none },
  { name:x('LFT (liver function)','এলএফটি (লিভার ফাংশন)'), cat:'pathology', price:1200, report:sd, prep:x('Fast 8 hours','৮ ঘণ্টা খালি পেটে') },
  { name:x('Chest X-ray (P/A)','বুকের এক্স-রে (P/A)'), cat:'imaging', price:500, report:x('30 minutes','৩০ মিনিট'), prep:x('Remove metal jewelry','ধাতব গহনা খুলে আসুন') },
  { name:x('Ultrasound (whole abdomen)','আলট্রাসনোগ্রাম (পেট ও তলপেট)'), cat:'imaging', price:1000, report:sd, prep:x('Full bladder, fast 6 hours','পূর্ণ মূত্রথলি, ৬ ঘণ্টা খালি পেটে') },
  { name:x('Ultrasound (pregnancy)','আলট্রাসনোগ্রাম (গর্ভকালীন)'), cat:'imaging', price:1000, report:sd, prep:x("As advised by doctor",'ডাক্তারের নির্দেশ অনুযায়ী') },
  { name:x('CT scan (head)','সিটি স্ক্যান (মাথা)'), cat:'imaging', price:4500, report:x('24 hours','২৪ ঘণ্টা'), prep:x('Book in advance','আগে থেকে সিরিয়াল নিন') },
  { name:x('MRI (spine)','এমআরআই (মেরুদণ্ড)'), cat:'imaging', price:9000, report:x('24–48 hours','২৪–৪৮ ঘণ্টা'), prep:x('Book in advance; tell us about metal implants','আগে থেকে সিরিয়াল; ধাতব বস্তু জানান') },
  { name:x('ECG','ইসিজি (ECG)'), cat:'cardiac', price:300, report:x('Immediate','তাৎক্ষণিক'), prep:none },
  { name:x('Echocardiogram','ইকোকার্ডিওগ্রাম'), cat:'cardiac', price:2500, report:sd, prep:none },
  { name:x('TSH','টিএসএইচ (TSH)'), cat:'hormone', price:600, report:sd, prep:none },
  { name:x('Vitamin D','ভিটামিন ডি'), cat:'hormone', price:2200, report:x('1–2 days','১–২ দিন'), prep:none },
];

export const packages = [
  { name:x('Basic Health Checkup','বেসিক হেলথ চেকআপ'), price:1800, items:[x('CBC','সিবিসি'),x('Blood sugar','ব্লাড সুগার'),x('Urine R/E','ইউরিন আর/ই'),x('Serum creatinine','সিরাম ক্রিয়েটিনিন'),x('ECG','ইসিজি')] },
  { name:x('Diabetes Package','ডায়াবেটিস প্যাকেজ'), price:2500, items:[x('Fasting & 2-hr sugar','ফাস্টিং ও ২ ঘণ্টা সুগার'),x('HbA1c','এইচবিএ১সি'),x('Lipid profile','লিপিড প্রোফাইল'),x('Urine R/E','ইউরিন আর/ই')] },
  { name:x('Heart Checkup','হার্ট চেকআপ'), price:5500, items:[x('ECG','ইসিজি'),x('Echocardiogram','ইকোকার্ডিওগ্রাম'),x('Lipid profile','লিপিড প্রোফাইল'),x('Cardiologist consultation','কার্ডিওলজিস্ট পরামর্শ')] },
  { name:x('Pregnancy Package','গর্ভকালীন প্যাকেজ'), price:3200, items:[x('CBC','সিবিসি'),x('Urine R/E','ইউরিন আর/ই'),x('Blood group','ব্লাড গ্রুপ'),x('Ultrasound','আলট্রাসনোগ্রাম'),x('Gynae consultation','গাইনি পরামর্শ')] },
];

// গ্যালারি: ছবি বদলাতে public/images/ এ নিজের ছবি দিন (একই নামে বা এখানে src বদলান)
export const gallery = [
  { src:'/images/gallery-1.svg', title:x('Our building','আমাদের ভবন'), text:x('Replace with a photo of the building and entrance, with a short description.','ভবন ও প্রবেশপথের ছবি দিন এবং এখানে সংক্ষিপ্ত বর্ণনা লিখুন।') },
  { src:'/images/gallery-2.svg', title:x('Reception & serial desk','রিসেপশন ও সিরিয়াল ডেস্ক'), text:x('Replace with a photo of the reception area.','রিসেপশন এলাকার ছবি ও বর্ণনা।') },
  { src:'/images/gallery-3.svg', title:x('Pathology laboratory','প্যাথলজি ল্যাব'), text:x('Replace with a photo of the lab and the machines you use.','ল্যাব ও ব্যবহৃত মেশিনের ছবি ও বর্ণনা।') },
  { src:'/images/gallery-4.svg', title:x('Imaging & ultrasound','ইমেজিং ও আলট্রাসনোগ্রাম'), text:x('Replace with a photo of the X-ray / ultrasound room.','এক্স-রে / আলট্রাসনো রুমের ছবি ও বর্ণনা।') },
  { src:'/images/gallery-5.svg', title:x('Consultation chambers','চেম্বার'), text:x("Replace with a photo of the doctors' chambers.",'ডাক্তারদের চেম্বারের ছবি ও বর্ণনা।') },
  { src:'/images/gallery-6.svg', title:x('Patient waiting area','রোগীদের অপেক্ষাকক্ষ'), text:x('Replace with a photo of the waiting area.','অপেক্ষাকক্ষের ছবি ও বর্ণনা।') },
];

export const faqs = [
  { q:x('How do I get my report?','রিপোর্ট কীভাবে পাব?'), a:x('You will be notified by SMS/WhatsApp when it is ready. You can also collect it at the counter.','রিপোর্ট প্রস্তুত হলে SMS/WhatsApp-এ জানানো হবে। কাউন্টার থেকেও সংগ্রহ করা যাবে।') },
  { q:x('Do I need a serial before seeing a doctor?','ডাক্তার দেখাতে কি আগে সিরিয়াল নিতে হবে?'), a:x('A serial reduces your waiting time. Book online or call the serial numbers.','সিরিয়াল নিলে অপেক্ষার সময় কমে। অনলাইনে বা সিরিয়ালের নম্বরে ফোন করে নিন।') },
  { q:x('Which tests need fasting?','খালি পেটে কোন পরীক্ষাগুলো দিতে হয়?'), a:x('Fasting sugar, lipid profile and a few others. Preparation is listed for every test.','ফাস্টিং সুগার, লিপিড প্রোফাইল ইত্যাদি। প্রতিটি টেস্টের প্রস্তুতি টেস্ট তালিকায় দেওয়া আছে।') },
];
