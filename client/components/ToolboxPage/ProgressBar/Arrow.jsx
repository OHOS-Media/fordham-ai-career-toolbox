export default function Arrow({ step, activeStep}) {
  return (
    <svg
      width="9vw"
      height="16"
      viewBox="0 0 170 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="169" height="0" transform="translate(0 8)" fill="#473BF0" />
      <path
        d="M169.707 8.70711C170.098 8.31658 170.098 7.68342 169.707 7.29289L163.343 0.928931C162.953 0.538407 162.319 0.538407 161.929 0.928931C161.538 1.31946 161.538 1.95262 161.929 2.34314L167.586 8L161.929 13.6569C161.538 14.0474 161.538 14.6805 161.929 15.0711C162.319 15.4616 162.953 15.4616 163.343 15.0711L169.707 8.70711ZM6.19602e-09 9L169 9L169 7L-6.19602e-09 7L6.19602e-09 9Z"
        fill={`${step.number < activeStep ? '#473BF0': '#EAEAFD'}`}
      />
    </svg>
  );
};