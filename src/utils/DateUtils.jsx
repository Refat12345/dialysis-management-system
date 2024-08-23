/* eslint-disable no-unused-vars */
import { useMemo } from "react";

export const useFormatDate = (dateString) => {
  return useMemo(() => {
    const [day, month, year] = dateString
      .split("-")
      .map((num) => parseInt(num, 10));
    const date = new Date(year, month - 1, day);

    // Create formatters for the day and year in en-US and the month in ar-SY
    const dayFormatter = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
    });
    const yearFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
    });
    const monthFormatter = new Intl.DateTimeFormat("ar-SY", {
      month: "long",
    });

    // Format each part of the date
    const formattedDay = dayFormatter.format(date);
    const formattedYear = yearFormatter.format(date);
    const formattedMonth = monthFormatter.format(date);

    // Combine all parts into the final string
    return `${formattedYear} ${formattedMonth} ${formattedDay}`;
  }, [dateString]);
};



export const formatDate = (dateString) => {
  const arabicMonths = {
    "يناير": "كانون الثاني",
    "فبراير": "شباط",
    "مارس": "آذار",
    "أبريل": "نيسان",
    "مايو": "أيار",
    "يونيو": "حزيران",
    "يوليو": "تموز",
    "أغسطس": "آب",
    "سبتمبر": "أيلول",
    "أكتوبر": "تشرين الأول",
    "نوفمبر": "تشرين الثاني",
    "ديسمبر": "كانون الأول"
  };
  
  const [day, month, year] = dateString.split('-');
 
  const arabicMonth = arabicMonths[month];

  return `${day} ${arabicMonth} ${year}`;
};

export const  convertDate = (dateStr) => {
  const months = {
      'يناير': '01',
      'فبراير': '02',
      'مارس': '03',
      'أبريل': '04',
      'مايو': '05',
      'يونيو': '06',
      'يوليو': '07',
      'أغسطس': '08',
      'سبتمبر': '09',
      'أكتوبر': '10',
      'نوفمبر': '11',
      'ديسمبر': '12'
  };
  
  const [day, month, year] = dateStr.split('-');

  const monthNumber = months[month];
  
  return `${year}-${monthNumber}-${day.padStart(2, '0')}`;
}

export function convertDateToArabicFormat(dateString) {
  
  const months = [
      "كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران",
      "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"
  ];

  
  const date = new Date(dateString);

 
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();


  const formattedDate = `${day} ${months[month]} ${year}`;
  
  return formattedDate;
}

export function getHourInArabic(time) {
  const hoursInArabic = [
      "الساعة الثانية عشر", "الساعة الواحدة", "الساعة الثانية", 
      "الساعة الثالثة", "الساعة الرابعة", "الساعة الخامسة", 
      "الساعة السادسة", "الساعة السابعة", "الساعة الثامنة", 
      "الساعة التاسعة", "الساعة العاشرة", "الساعة الحادية عشر"
  ];

  let [hours, minutes, seconds] = time.split(':').map(Number);

  hours = hours % 12;

  return hoursInArabic[hours];
}


export function convertDateString(dateString) {

  const monthsMap = {
      "يناير": "01",
      "فبراير": "02",
      "مارس": "03",
      "أبريل": "04",
      "مايو": "05",
      "يونيو": "06",
      "يوليو": "07",
      "أغسطس": "08",
      "سبتمبر": "09",
      "أكتوبر": "10",
      "نوفمبر": "11",
      "ديسمبر": "12"
  };


  const parts = dateString.split('-');

  const day = parts[0];
  const month = monthsMap[parts[1]];
  const year = parts[2];

  return `${year}-${month}-${day}`;
}


export function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // إذا لم يكن قد مر يوم الميلاد لهذا العام بعد، ننقص سنة واحدة
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  return age;
}