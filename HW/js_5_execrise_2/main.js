const app = new Vue({
  el: '#app',
  data() {
    return {
      blogPosts: [
        { title: 'The Power of Positive Thinking: A Guide', content: 'This guide provides an in-depth look at the power of positive thinking and how it can help you achieve success in life.' },
        { title: 'Overcoming Weaknesses: A Guide', content: 'This guide provides practical advice on how to identify and overcome weaknesses in order to achieve success in any area of life.' },
        { title: "A Beginner's Guide to Foucs", content: "This beginner's guide to foucs provides an easy-to-follow introduction to the fundamentals of fencing, covering everything from the basics of fencing to advanced techniques. With this guide, you'll be able to confidently navigate the world of fencing with confidence." }
      ]
    };
  }
});