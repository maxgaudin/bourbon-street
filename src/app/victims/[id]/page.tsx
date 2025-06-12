import Image from 'next/image';
import Link from 'next/link';

// Victim data (same as in page.tsx)
const victims = [
  {
    id: "latasha-polk",
    firstName: "LaTasha",
    lastName: "Polk",
    age: 47,
    sex: "F",
    hometown: "New Orleans, LA",
    status: "Deceased",
    donationLink: "https://www.gofundme.com/f/help-lay-latasha-polk-to-rest",
    goal: "$25K",
    percentageOfGoal: "70%",
    websiteCopy: "Latasha Polk's life was tragically lost on New Year's Day due to the terror attack. Latasha has left behind a son, and was a loving wife, child, sister, cousin and friend. She loved to work from sun up to sun down. Her loss is a devastation for the family, and they are asking for help from friends, family, and the community to help lay her to rest.",
  },
  {
    id: "james-henry",
    firstName: "James",
    lastName: "Henry",
    age: 30,
    sex: "M",
    hometown: "New Orleans, LA",
    status: "Deceased",
    donationLink: "https://www.gofundme.com/f/james-henry-memorial-fund",
    goal: "$20K",
    percentageOfGoal: "85%",
    websiteCopy: "James Henry was a beloved member of the New Orleans community. He was known for his infectious smile and kind heart. His family is asking for help with funeral expenses and to support his young children.",
  },
  {
    id: "sarah-johnson",
    firstName: "Sarah",
    lastName: "Johnson",
    age: 28,
    sex: "F",
    hometown: "Baton Rouge, LA",
    status: "Deceased",
    donationLink: "https://www.gofundme.com/f/sarah-johnson-memorial",
    goal: "$15K",
    percentageOfGoal: "60%",
    websiteCopy: "Sarah Johnson was visiting New Orleans with friends to celebrate the New Year. She was a teacher who touched many lives through her dedication to education. Her family is seeking support for funeral arrangements and to establish a scholarship in her name.",
  },
  {
    id: "michael-williams",
    firstName: "Michael",
    lastName: "Williams",
    age: 35,
    sex: "M",
    hometown: "New Orleans, LA",
    status: "Deceased",
    donationLink: "https://www.gofundme.com/f/michael-williams-family-support",
    goal: "$30K",
    percentageOfGoal: "45%",
    websiteCopy: "Michael Williams was a local musician who brought joy to countless people through his music. He leaves behind a wife and two young children. His family is asking for help with funeral expenses and to support his children's future education.",
  },
  {
    id: "emily-davis",
    firstName: "Emily",
    lastName: "Davis",
    age: 25,
    sex: "F",
    hometown: "Lafayette, LA",
    status: "Deceased",
    donationLink: "https://www.gofundme.com/f/emily-davis-memorial-fund",
    goal: "$20K",
    percentageOfGoal: "75%",
    websiteCopy: "Emily Davis was a graduate student at LSU who was in New Orleans celebrating with friends. She was known for her passion for environmental science and her dedication to making the world a better place. Her family is seeking support for funeral expenses and to establish a scholarship in her field of study.",
  },
  {
    id: "robert-martinez",
    firstName: "Robert",
    lastName: "Martinez",
    age: 42,
    sex: "M",
    hometown: "New Orleans, LA",
    status: "Deceased",
    donationLink: "https://www.gofundme.com/f/robert-martinez-family-support",
    goal: "$25K",
    percentageOfGoal: "50%",
    websiteCopy: "Robert Martinez was a local business owner and community leader. He was known for his generosity and commitment to helping others. His family is asking for support to help with funeral expenses and to maintain his business for his employees.",
  },
  {
    id: "jennifer-taylor",
    firstName: "Jennifer",
    lastName: "Taylor",
    age: 31,
    sex: "F",
    hometown: "New Orleans, LA",
    status: "Deceased",
    donationLink: "https://www.gofundme.com/f/jennifer-taylor-memorial",
    goal: "$20K",
    percentageOfGoal: "65%",
    websiteCopy: "Jennifer Taylor was a nurse who dedicated her life to helping others. She was known for her compassion and dedication to her patients. Her family is seeking support for funeral expenses and to establish a fund in her name to help other healthcare workers in need.",
  },
  {
    id: "david-wilson",
    firstName: "David",
    lastName: "Wilson",
    age: 38,
    sex: "M",
    hometown: "Metairie, LA",
    status: "Deceased",
    donationLink: "https://www.gofundme.com/f/david-wilson-family-support",
    goal: "$30K",
    percentageOfGoal: "40%",
    websiteCopy: "David Wilson was a father of three and a beloved member of his community. He was known for his sense of humor and his willingness to help anyone in need. His family is asking for support to help with funeral expenses and to support his children's future.",
  },
  {
    id: "lisa-anderson",
    firstName: "Lisa",
    lastName: "Anderson",
    age: 29,
    sex: "F",
    hometown: "New Orleans, LA",
    status: "Deceased",
    donationLink: "https://www.gofundme.com/f/lisa-anderson-memorial",
    goal: "$15K",
    percentageOfGoal: "80%",
    websiteCopy: "Lisa Anderson was a talented artist who brought beauty to the world through her work. She was known for her creativity and her kind spirit. Her family is seeking support for funeral expenses and to preserve her artistic legacy.",
  },
  {
    id: "thomas-brown",
    firstName: "Thomas",
    lastName: "Brown",
    age: 45,
    sex: "M",
    hometown: "New Orleans, LA",
    status: "Deceased",
    donationLink: "https://www.gofundme.com/f/thomas-brown-family-support",
    goal: "$25K",
    percentageOfGoal: "55%",
    websiteCopy: "Thomas Brown was a veteran and community volunteer who dedicated his life to serving others. He was known for his leadership and his commitment to making a difference. His family is asking for support to help with funeral expenses and to continue his work in the community.",
  }
];

export default function VictimPage({ params }: { params: { id: string } }) {
  const victim = victims.find(v => v.id === params.id);

  if (!victim) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Victim not found
        </h1>
        <Link href="/" className="text-blue-600 hover:text-blue-700">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
        ← Back to all victims
      </Link>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500">No photo available</span>
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {victim.firstName} {victim.lastName}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Age {victim.age} • {victim.hometown}
            </p>
            <div className="prose dark:prose-invert max-w-none">
              <p>{victim.websiteCopy}</p>
            </div>
            
            {victim.donationLink && (
              <div className="mt-8">
                <a
                  href={victim.donationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Support Family
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 