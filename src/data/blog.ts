export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "understanding-child-growth-percentiles",
    title: "Understanding Growth Charts: What Do Your Child's Percentiles Mean?",
    excerpt: "Learn how pediatricians read growth charts, what counts as a normal growth trajectory, and when parent heights should trigger an evaluation.",
    content: `
      <p>Every time you visit a pediatrician, one of the first things they do is measure your child's height and weight, and plot them on a grid of lines. This grid is a growth chart. But what do those percentages like '50th percentile' or '10th percentile' actually mean, and when should you be concerned?</p>
      
      <h3>What is a Growth Percentile?</h3>
      <p>A growth percentile compares your child to a representative sample of thousands of healthy children of the same age and gender. If your child is in the 75th percentile for height, it means they are taller than 75 out of 100 children their age, and shorter than the remaining 25 children. If they are in the 10th percentile, they are taller than 10 out of 100 children and shorter than 90.</p>
      
      <h3>Is the 50th Percentile the 'Ideal' Target?</h3>
      <p><strong>Absolutely not.</strong> There is a common misconception that every child should aim for the 50th percentile. In reality, a healthy child can be in the 3rd percentile or the 97th percentile. What matters most is <strong>consistency</strong> and <strong>growth velocity</strong>.</p>
      <p>If your child has consistently tracked along the 10th percentile curve since infancy, they are likely growing normally for their genetic background. However, if a child was at the 75th percentile at age 5 and has dropped to the 25th percentile by age 8, that downward crossing of percentile lines requires investigation by a pediatric endocrinologist.</p>

      <h3>When is Short Stature a Medical Concern?</h3>
      <p>Evaluation is recommended if:</p>
      <ul>
        <li>Your child's height is below the 3rd percentile.</li>
        <li>Your child is growing slower than 4 to 5 cm (about 2 inches) per year after the age of 4.</li>
        <li>Your child is significantly shorter than both parents (discrepancy from the Mid-Parental Height).</li>
        <li>The growth plates in the bones are maturing too quickly.</li>
      </ul>

      <h3>Summary</h3>
      <p>Growth charts are diagnostic tools. A single reading is less important than the overall trajectory. Keeping a regular annual record of your child's height is the best way to ensure their endocrine system is functioning healthily.</p>
    `,
    category: "Growth",
    date: "June 15, 2026",
    readTime: "4 min read",
    author: "Dr. Anurag Bajpai",
    tags: ["Growth Charts", "Short Stature", "Child Development", "Parenting Tips"]
  },
  {
    slug: "managing-type1-diabetes-in-school",
    title: "Back to School with Type 1 Diabetes: A Parent's Essential Guide",
    excerpt: "Help your child transition back to school safely with a structured Diabetes Care Plan, emergency supplies, and teacher guidelines.",
    content: `
      <p>Sending a child with Type 1 Diabetes back to school can be stressful for parents. However, with preparation and open communication, children with diabetes can have a safe, active, and successful school year.</p>
      
      <h3>1. Create a written School Diabetes Care Plan</h3>
      <p>Before the school year starts, meet with your child's pediatric endocrinologist to finalize a written School Diabetes Care Plan. This plan should include:</p>
      <ul>
        <li>Target blood glucose ranges.</li>
        <li>Exact insulin doses for meals and correction targets.</li>
        <li>Guidelines for checking blood sugar (fingerpricks or CGM alarms).</li>
        <li>Symptoms and treatments for low blood sugar (hypoglycemia) and high blood sugar (hyperglycemia).</li>
        <li>Emergency contact details.</li>
      </ul>

      <h3>2. Prepare a 'Diabetes Supply Box' for the Classroom</h3>
      <p>Provide the school nurse or main teacher with a container labeled with your child's name containing:</p>
      <ul>
        <li>Glucose meter, strips, and lancets (as a backup to a CGM).</li>
        <li>Fast-acting sugars to treat 'lows' (fruit juice boxes, glucose tablets, candy).</li>
        <li>Backup insulin pens or syringes and insulin pump supplies.</li>
        <li>Ketone testing strips.</li>
        <li>An emergency Glucagon kit.</li>
      </ul>

      <h3>3. Educate the School Staff</h3>
      <p>Arrange a brief meeting with your child's teachers, physical education coach, and school staff. Ensure they understand that:</p>
      <ul>
        <li>The child must be allowed to check blood sugar at any time.</li>
        <li>The child must have immediate access to bathroom facilities and drinking water.</li>
        <li>A child experiencing a low blood sugar should <strong>never</strong> be sent to the nurse's office alone.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>A child with Type 1 diabetes should not feel restricted at school. By training staff and providing the right supplies, your child can fully participate in sports, field trips, and classroom activities.</p>
    `,
    category: "Diabetes",
    date: "May 20, 2026",
    readTime: "5 min read",
    author: "Dr. Anurag Bajpai",
    tags: ["Type 1 Diabetes", "School Health", "Insulin Therapy", "Parenting Guidance"]
  },
  {
    slug: "understanding-early-puberty-symptoms",
    title: "Early Puberty: When is it Too Early and What Can Parents Do?",
    excerpt: "Spotting the early physical signs of precocious puberty in young girls and boys, and understanding the medical treatments available.",
    content: `
      <p>Puberty is a natural transition, but when it starts in a child who is only 6, 7, or 8 years old, it raises serious medical and developmental concerns. This is called Precocious Puberty. Let's explore the causes, signs, and treatments.</p>
      
      <h3>What is Precocious Puberty?</h3>
      <p>Precocious puberty is defined as the onset of secondary sexual characteristics before the age of 8 in girls and before 9 in boys. In recent years, pediatric endocrinologists have noticed a gradual trend toward earlier puberty, partly due to nutritional changes and obesity, but very early onset still requires medical investigation.</p>
      
      <h3>Signs to Watch For</h3>
      <p>Parents should check for the following signs:</p>
      <ul>
        <li><strong>In Girls:</strong> Breast development (often starting as a small, tender bud under the nipple) before age 8, rapid height growth spurts, or early menstruation before age 9-10.</li>
        <li><strong>In Boys:</strong> Enlargement of the testicles (volume greater than 4 mL) before age 9, sudden rapid growth, acne, or deepening voice.</li>
        <li><strong>In both:</strong> Appearance of pubic or armpit hair and body odor at an early age.</li>
      </ul>

      <h3>Why is Early Puberty Treated?</h3>
      <p>There are two primary reasons why treatment is recommended:</p>
      <ol>
        <li><strong>Adult Height Reduction:</strong> Early puberty causes bones to mature too fast. Growth plates fuse early, meaning the child stops growing at a young age. Without treatment, this can lead to short stature in adulthood.</li>
        <li><strong>Psychosocial Stress:</strong> Children with precocious puberty often feel confused and self-conscious because they look different from their peers.</li>
      </ol>

      <h3>How is it Managed?</h3>
      <p>Central precocious puberty is treated using medications called GnRH analogues. These are standard, safe hormones administered as monthly or 3-monthly injections that pause the puberty process. Once the medication is discontinued, normal puberty resumes.</p>
    `,
    category: "Hormones",
    date: "April 05, 2026",
    readTime: "4 min read",
    author: "Dr. Anurag Bajpai",
    tags: ["Precocious Puberty", "Hormones", "Child Growth", "Pediatric Care"]
  }
];
