export interface Testimonial {
  id: string;
  parentName: string;
  childAgeSex: string;
  condition: string;
  location: string;
  text: string;
  rating: number;
}

export const googleReviewsSummary = {
  rating: 4.8,
  totalReviews: 240,
  sourceUrl: "https://google.com"
};

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    parentName: "Rajesh Sharma",
    childAgeSex: "9-year-old boy (Amit)",
    condition: "Growth Hormone Deficiency",
    location: "Kanpur",
    text: "We were extremely worried when Amit stopped growing and was the shortest in his class. Dr. Anurag Bajpai diagnosed him with GHD and started Growth Hormone therapy. In 2 years, Amit has grown 18 cm and has gained tremendous confidence. Dr. Bajpai's explanation of the science and child-friendly approach made all the difference.",
    rating: 5
  },
  {
    id: "t2",
    parentName: "Meera Deshmukh",
    childAgeSex: "12-year-old girl (Priya)",
    condition: "Type 1 Diabetes",
    location: "Lucknow",
    text: "When Priya was diagnosed with Type 1 Diabetes, our world fell apart. Dr. Bajpai walked us through pump therapy and continuous glucose monitoring. Now Priya plays basketball, eats normally, and her HbA1c is stable. He is not just a doctor; he is a mentor for the whole family.",
    rating: 5
  },
  {
    id: "t3",
    parentName: "Sanjay Verma",
    childAgeSex: "14-year-old girl (Sneha)",
    condition: "Hypothyroidism & Slow Growth",
    location: "Kanpur",
    text: "Sneha was suffering from sluggishness and wasn't growing. Dr. Bajpai quickly identified a severe underactive thyroid. Within months of starting simple thyroid hormone pills, she got her energy back, and her height has caught up with her age. We are highly grateful for his guidance.",
    rating: 5
  },
  {
    id: "t4",
    parentName: "Anjali Gupta",
    childAgeSex: "7-year-old girl (Kavya)",
    condition: "Precocious Puberty",
    location: "Fatehpur",
    text: "Kavya started showing puberty signs when she was only 7. Dr. Bajpai explained that pausing it was essential to save her final adult height. The GnRH injections were easy to handle, and Kavya is growing normally now. A very professional and evidence-based doctor.",
    rating: 5
  }
];
