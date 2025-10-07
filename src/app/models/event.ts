export interface Event {
  // We use "interface" instead of "class" here because:
  //    - It defines only the *shape* (structure) of the data.
  //    - It does not generate JavaScript code (lighter).
  //    - It is perfect for describing data models coming from an API or static data.
  id: number;              // Unique identifier of the event
  titre: string;           // Event title
  description: string;     // Event description
  date: Date;              // Event date
  lieu: string;            // Location
  prix: number;            // Ticket price
  organisateurId: number;  // Organizer identifier
  imageUrl: string;        // Path/URL to the event image
  nbPlaces: number;        // Number of available places
  nbrLikes: number;         // Number of likes
}
