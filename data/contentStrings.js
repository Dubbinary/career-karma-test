import { Theme } from "../theme";
export const header = {
  navigation: [
    ["Programs", "/programs"],
    ["21 Day Challange", "/21-day-challenge"],
    ["About", "/about"],
    ["Blog", "/blog"]
  ],
};

export const banner = {
  header: "Review your bootcamp",
  heading1: "Win $500 ",
  heading2: "to Amazon",
  description: "Reviewing your coding bootcamp experience will help \
  future students make an educated decision, plus you'll be entered \
  to win a $500 Amazon Giftcard! Leave your verified review by June 30th, 2019!",
};

export const guiudelines = {
  heading: "Review Guidelines",
  items: [
    "Only Applicants, Students, and Graduates are permitted to leave reviews \
    on Course Report.",
    "Post clear, valuable, and honest information that will be useful and \
    informative to future coding bootcampers. Think about what your bootcamp \
    excelled at and what might have been better.",
    "Be nice to others; don't attack others.",
    "Use good grammar and check your spelling.",
    "Don't post reviews on behalf of other students or impersonate any person, \
    or falsely state or otherwise misrepresent your affiliation with a person \
    or entity.",
    "Don't spam or post fake reviews intended to boost or lower ratings.",
    "Don't post or link to content that is sexually explicit.",
    "Don't post or link to content that is abusive or hateful or threatens or \
    harasses others.",
    "Please do not submit duplicate or multiple reviews. These will be deleted. \
    Email moderators to revise a review or click the link in the email you \
    receive when submitting a review.",
    "Please note that we reserve the right to review and remove commentary that \
    violates our policies.",
  ],
};

export const reviewForm = {
  signInBtn1: "Already have an account? ",
  signInBtn2: "Sign in",
  appAcAlt: "App Academy",
  heading: "Add review for App Academy",
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    keepAnonymous: false,
    status: 'graduate',
    ratings: [0,0,0,0],
    title: '',
    review: '',
    pros: '',
    cons: '',
    school: '',
    course: '',
    programType: '',
    tuitions: [false, false, false, false, false],
    location: '',
    graduationDate: '',
    jobMonths: '',
    salary: '',
  },
  mainInfoInputs: [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "First Name",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
    },
    {
      label: "First Name",
      name: "email",
      type: "text",
      placeholder: "E-mail",
    },
  ],
  keepAnonymous: {
    name: "keepAnonymous",
    label: "Keep Anonymous?"
  },
  status: {
    name: "status",
    label: "Status",
    options: [
      {
        key: 'graduate',
        title: 'Graduate',
        icon: Theme.assets.graduateSvg,
      },
      {
        key: 'student',
        title: 'Student',
        icon: Theme.assets.studentSvg,
      },
      {
        key: 'applicant',
        title: 'Applicant',
        icon: Theme.assets.applicantSvg,
    },
   ]
  },
  reviewInputs: [
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Title",
    },
    {
      label: "Your review",
      name: "review",
      type: "textarea",
      placeholder: "Enter here yor review ...",
    },
    {
      label: "Pros",
      name: "pros",
      type: "textarea",
      placeholder: "Pros",
    },
    {
      label: "Cons",
      name: "cons",
      type: "textarea",
      placeholder: "Cons",
    },
  ],
  courseInfoSelects: [
    {
      label: "School",
      name: "school",
      options: [
        { value: 1, label: 'School 1' },
        { value: 2, label: 'School 2' },
      ]
    },
    {
      label: "Course",
      name: "course",
      options: [
        { value: 1, label: 'Course 1' },
        { value: 2, label: 'Course 2' },
      ]
    },
    {
      label: "Program type",
      name: "programType",
      options: [
        { value: 1, label: 'Program type 1' },
        { value: 2, label: 'Program type 2' },
      ]
    },
  ],
  tuitions: {
    label: "Tuition payment",
    options: [
      "Upfront",
      "ISA",
      "Financing",
      "Scholarship",
      "Stipend"
    ]
  },
  locationSelect: {
    name: 'location',
    label: "Location",
    options: [
      { value: 1, label: 'New York City, NY' },
      { value: 2, label: 'Los Angeles, CA' },
      { value: 3, label: 'Chicago, IL' },
      { value: 4, label: 'Houston, TX' },
    ]
  },
  employedField: {
    label1: "Yes, I'm employed",
    label2: "No, I'm no employed",
    name: "employed",
  },
  jobInfoInputs: [
    {
      label: "How long did it take you to find a job?  (months)",
      name: "jobMonths",
      type: "number",
      placeholder: "Months",
    },
    {
      label: "What is your salary (confidential)?  ($)",
      name: "salary",
      type: "number",
      placeholder: "Salary",
    },
  ],
  submitBtn: "Submit review",
  termsOfUse: "I agree to the Terms of Use. This review of my experience \
    at my current or former employer is truthful."
};

export const validation = {
  required: "Required",
  invalidEmail: "Email is invalid, Please provide valid email",
};
