export const services = [
  {
    name:"Web Development",
  description:" I Create, Deploy and Fully fuctional websites with silk designs and smooth animations to keep your clients Engaged, While performance is my priority, I also  put your needs in check, by using required and most recent frameworks for your Works",

     link:"#"},
{
  name:"Mobile Development",
  description:"Mobile develpotment 😁, In the current time.... technology is growing so fast, so why not keep your products, business and other important things you do on the run. We can help you by building powerful apps With AI interations such as ChatGPT Bard by Goodle and Lots more ",
  link:"#"},
{
  name:"Artificial Intelligence",
  description:"The Era of Thinking Computers, Do you want your Advertizing, Presentations, Surverys and other time cosuming task to be automated with high precisons?? Well here you go. With our artificial intelligence programms we help you to build and monitor(if requested) your AIs.",
  link:"#"},
{
  name:"Propt Engineering",
  description:"Dealing with AIs requires a lot so. i thought getting certified on Prompt Enginerring will better tell you that WE do more than we say here in the Platform",
  link:"#"

}]

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
