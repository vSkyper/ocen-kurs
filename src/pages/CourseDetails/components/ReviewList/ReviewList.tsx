import { ReviewTab } from './components';

export default function ReviewList() {
  const revs = [
    {
      revId: 1,
      author: 'Artur Kowalski',
      review: 'Nice course, I learned a lot!',
      rating: 4,
    },
    {
      revId: 2,
      author: 'Grzegorz Florczak',
      review: 'I did not like it.',
      rating: 2,
    },
    {
      revId: 3,
      author: 'Jimmy',
      review: 'Great course!',
      rating: 5,
    },
    {
      revId: 4,
      author: 'Sophia Lee',
      review:
        'Informative and well-structured. The course covered a wide range of topics with sufficient depth. The videos were professionally produced and the quizzes helped reinforce key concepts. I appreciated the flexibility to study at my own pace. Overall, a great learning experience!',
      rating: 4,
    },
    {
      revId: 5,
      author: 'Liam Smith',
      review:
        'Too basic for my level. As someone with prior experience in this field, I found the course to be quite introductory. While it might be suitable for beginners, I was hoping for more advanced content. The explanations were clear, but I would have liked to see more advanced topics covered.',
      rating: 3,
    },
    {
      revId: 6,
      author: 'Olivia Brown',
      review:
        'Excellent content, highly recommend! The course exceeded my expectations. The depth of coverage on each topic was impressive. The practical exercises were challenging yet achievable. I particularly liked the case studies, which provided insights into real-world applications. Overall, I feel much more confident in this subject area now.',
      rating: 5,
    },
    {
      revId: 7,
      author: 'Mason Garcia',
      review:
        'Not engaging, struggled to stay focused. I found the course material to be dry and uninspiring. The instructors delivery was monotone, which made it difficult to maintain interest The lack of interactive elements or real world examples further contributed to my disengagement',
      rating: 2,
    },
    {
      revId: 8,
      author: 'Ava Martinez',
      review:
        'Loved the practical examples. The course provided a good balance of theory and practical application. The hands-on exercises were particularly beneficial in reinforcing theoretical concepts. The instructor was knowledgeable and approachable. I would definitely recommend this course to others.',
      rating: 4,
    },
    {
      revId: 9,
      author: 'Ethan Wilson',
      review:
        'Very detailed and thorough. I appreciated the depth of coverage on each topic. The course materials were well-organized and easy to follow. The quizzes and assignments were challenging but rewarding. I gained a solid understanding of the subject matter and feel prepared to apply it in real-world scenarios.',
      rating: 5,
    },
    {
      revId: 10,
      author: 'Isabella Davis',
      review:
        "Average content, nothing special. While the course content was decent, it didn't stand out from other similar courses I've taken. The material was presented adequately, but there were no groundbreaking insights or innovative approaches. It's a solid introduction to the topic, but not much beyond that.",
      rating: 3,
    },
  ];
  return (
    <div>
      {revs.map((rev) => (
        <ReviewTab rev={rev} />
      ))}
    </div>
  );
}
