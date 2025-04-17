import Card from "../component/Card";

export default function Home() {
    const people = [
        { name: 'John Doe', cast: 'Smith', religion: 'Christianity' },
        { name: 'Jane Doe', cast: 'Johnson', religion: 'Islam' },
        { name: 'Alice Brown', cast: 'Brown', religion: 'Hinduism' },
        { name: 'Alice Brown', cast: 'Brown', religion: 'Hinduism' },
        { name: 'Alice Brown', cast: 'Brown', religion: 'Hinduism' },
        { name: 'Alice Brown', cast: 'Brown', religion: 'Hinduism' },
        
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <main>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {people.map((person, index) => (
                        <Card name={person.name} cast={person.cast} religion={person.religion}/>
                    ))}
                 
                </section>
            </main>
        </div>
    );
}


