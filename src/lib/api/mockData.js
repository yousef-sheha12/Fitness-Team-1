const mockTrainers = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    bio: 'Certified personal trainer with 8 years of experience in strength training and body transformation.',
    location: 'Cairo, Egypt',
    rating: 4.8,
    experience_years: 8,
    profile_image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400',
    is_approved: true,
    price_per_session: 500,
    total_reviews: 124,
    specializations: ['strength', 'cardio', 'weight_loss'],
    specialization_names: ['Strength Training', 'Cardio', 'Weight Loss'],
    user_id: 101,
    packages: [
      { id: 1, name: 'Starter', title: 'Starter Package', description: '4 sessions for beginners', price: 1800, duration_days: 30, sessions: 4, trainer_id: 1, is_active: true, features: ['4 one-on-one sessions', 'Custom workout plan', 'Basic nutrition guide'] },
      { id: 2, name: 'Pro', title: 'Pro Package', description: '8 sessions for intermediate', price: 3200, duration_days: 60, sessions: 8, trainer_id: 1, is_active: true, features: ['8 one-on-one sessions', 'Custom workout plan', 'Detailed nutrition plan', 'Weekly progress check'] },
      { id: 3, name: 'Elite', title: 'Elite Package', description: '12 sessions for advanced', price: 4500, duration_days: 90, sessions: 12, trainer_id: 1, is_active: true, features: ['12 one-on-one sessions', 'Advanced workout plan', 'Full nutrition coaching', 'Daily check-ins', 'Video call support'] }
    ]
  },
  {
    id: 2,
    name: 'Sara Mohamed',
    bio: 'Yoga and pilates instructor specializing in flexibility and mindfulness training.',
    location: 'Alexandria, Egypt',
    rating: 4.9,
    experience_years: 6,
    profile_image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400',
    is_approved: true,
    price_per_session: 400,
    total_reviews: 98,
    specializations: ['yoga', 'pilates', 'flexibility'],
    specialization_names: ['Yoga', 'Pilates', 'Flexibility'],
    user_id: 102,
    packages: [
      { id: 4, name: 'Yoga Basics', title: 'Yoga Basics', description: '4 yoga sessions', price: 1400, duration_days: 30, sessions: 4, trainer_id: 2, is_active: true, features: ['4 yoga sessions', 'Breathing techniques', 'Flexibility assessment'] },
      { id: 5, name: 'Mindful Movement', title: 'Mindful Movement', description: '8 sessions combining yoga and pilates', price: 2800, duration_days: 60, sessions: 8, trainer_id: 2, is_active: true, features: ['8 mixed sessions', 'Personalized sequences', 'Meditation guidance'] }
    ]
  },
  {
    id: 3,
    name: 'Omar Khaled',
    bio: 'Former national athlete specializing in HIIT and functional training.',
    location: 'Giza, Egypt',
    rating: 4.7,
    experience_years: 10,
    profile_image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
    is_approved: true,
    price_per_session: 600,
    total_reviews: 156,
    specializations: ['hiit', 'functional', 'athletic'],
    specialization_names: ['HIIT', 'Functional Training', 'Athletic Performance'],
    user_id: 103,
    packages: [
      { id: 6, name: 'HIIT Blast', title: 'HIIT Blast', description: '6 high-intensity sessions', price: 3200, duration_days: 30, sessions: 6, trainer_id: 3, is_active: true, features: ['6 HIIT sessions', 'Heart rate monitoring', 'Progress tracking'] },
      { id: 7, name: 'Athletic Edge', title: 'Athletic Edge', description: '12 advanced athletic training sessions', price: 6000, duration_days: 90, sessions: 12, trainer_id: 3, is_active: true, features: ['12 athletic sessions', 'Performance testing', 'Speed & agility drills', 'Recovery protocols'] }
    ]
  },
  {
    id: 4,
    name: 'Nour Ibrahim',
    bio: 'Nutritionist and weight loss specialist with a focus on sustainable lifestyle changes.',
    location: 'Cairo, Egypt',
    rating: 4.6,
    experience_years: 5,
    profile_image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400',
    is_approved: true,
    price_per_session: 450,
    total_reviews: 87,
    specializations: ['weight_loss', 'nutrition', 'lifestyle'],
    specialization_names: ['Weight Loss', 'Nutrition Coaching', 'Lifestyle Coaching'],
    user_id: 104,
    packages: [
      { id: 8, name: 'Weight Loss Start', title: 'Weight Loss Start', description: 'Begin your weight loss journey', price: 1600, duration_days: 30, sessions: 4, trainer_id: 4, is_active: true, features: ['4 coaching sessions', 'Meal planning', 'Weekly weigh-ins'] },
      { id: 9, name: 'Total Transformation', title: 'Total Transformation', description: 'Complete lifestyle overhaul', price: 4000, duration_days: 90, sessions: 12, trainer_id: 4, is_active: true, features: ['12 coaching sessions', 'Custom meal plans', 'Grocery shopping guide', 'Recipe book', 'Daily support'] }
    ]
  },
  {
    id: 5,
    name: 'Mostafa Ali',
    bio: 'Bodybuilding coach and competitive athlete with multiple national titles.',
    location: 'Mansoura, Egypt',
    rating: 4.5,
    experience_years: 12,
    profile_image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
    is_approved: true,
    price_per_session: 700,
    total_reviews: 203,
    specializations: ['bodybuilding', 'strength', 'competition'],
    specialization_names: ['Bodybuilding', 'Strength Training', 'Competition Prep'],
    user_id: 105,
    packages: [
      { id: 10, name: 'Build', title: 'Build Package', description: 'Muscle building program', price: 3000, duration_days: 60, sessions: 8, trainer_id: 5, is_active: true, features: ['8 training sessions', 'Hypertrophy program', 'Supplement guidance'] },
      { id: 11, name: 'Compete', title: 'Compete Package', description: 'Competition preparation', price: 8000, duration_days: 120, sessions: 20, trainer_id: 5, is_active: true, features: ['20 training sessions', 'Posing practice', 'Peak week protocol', 'Stage prep coaching'] }
    ]
  },
  {
    id: 6,
    name: 'Layla Mahmoud',
    bio: 'Dance fitness instructor bringing fun and energy to every workout session.',
    location: 'Luxor, Egypt',
    rating: 4.8,
    experience_years: 4,
    profile_image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    is_approved: true,
    price_per_session: 350,
    total_reviews: 72,
    specializations: ['dance', 'cardio', 'group_fitness'],
    specialization_names: ['Dance Fitness', 'Cardio', 'Group Fitness'],
    user_id: 106,
    packages: [
      { id: 12, name: 'Dance Cardio', title: 'Dance Cardio', description: 'Fun dance-based workouts', price: 1200, duration_days: 30, sessions: 4, trainer_id: 6, is_active: true, features: ['4 dance sessions', 'Music playlist', 'Choreography basics'] },
      { id: 13, name: 'Groove Master', title: 'Groove Master', description: 'Advanced dance fitness program', price: 2800, duration_days: 60, sessions: 8, trainer_id: 6, is_active: true, features: ['8 dance sessions', 'Advanced choreography', 'Performance video', 'Party workout sessions'] }
    ]
  }
];

const mockSearchResults = mockTrainers.map(t => ({
  trainer_id: t.id,
  name: t.name,
  profile_image: t.profile_image,
  rating: t.rating,
  location: t.location,
  specializations: t.specialization_names,
  experience_years: t.experience_years
}));

const mockSpecializations = [
  { id: 1, name: 'Strength Training', description: 'Build muscle and increase strength through resistance exercises.' },
  { id: 2, name: 'Cardio', description: 'Improve cardiovascular health and endurance with aerobic exercises.' },
  { id: 3, name: 'Weight Loss', description: 'Specialized programs for effective and sustainable weight management.' },
  { id: 4, name: 'Yoga', description: 'Mind-body practice combining physical postures, breathing, and meditation.' },
  { id: 5, name: 'Pilates', description: 'Low-impact exercise focusing on core strength and body awareness.' },
  { id: 6, name: 'Flexibility', description: 'Improve range of motion and prevent injuries through stretching.' },
  { id: 7, name: 'HIIT', description: 'High-intensity interval training for maximum calorie burn.' },
  { id: 8, name: 'Functional Training', description: 'Exercises that improve daily movement patterns and overall fitness.' },
  { id: 9, name: 'Bodybuilding', description: 'Structured programs for muscle hypertrophy and physique development.' },
  { id: 10, name: 'Nutrition Coaching', description: 'Personalized dietary guidance to support your fitness goals.' },
  { id: 11, name: 'Dance Fitness', description: 'Fun dance-based workouts that burn calories and boost mood.' },
  { id: 12, name: 'Athletic Performance', description: 'Sport-specific training to enhance athletic abilities.' }
];
const mockPackages = [
  { id: 1, name: 'Starter', title: 'Starter Package', description: 'Perfect for beginners starting their fitness journey.', price: 1800, duration_days: 30, sessions: 4, trainer_id: 1, is_active: true, features: ['4 one-on-one sessions', 'Custom workout plan', 'Basic nutrition guide'] },
  { id: 2, name: 'Pro', title: 'Pro Package', description: 'For those ready to take their fitness to the next level.', price: 3200, duration_days: 60, sessions: 8, trainer_id: 1, is_active: true, features: ['8 one-on-one sessions', 'Custom workout plan', 'Detailed nutrition plan', 'Weekly progress check'] },
  { id: 3, name: 'Elite', title: 'Elite Package', description: 'Premium package for serious athletes and fitness enthusiasts.', price: 4500, duration_days: 90, sessions: 12, trainer_id: 1, is_active: true, features: ['12 one-on-one sessions', 'Advanced workout plan', 'Full nutrition coaching', 'Daily check-ins', 'Video call support'] },
  { id: 4, name: 'Yoga Basics', title: 'Yoga Basics', description: 'Introduction to yoga practice.', price: 1400, duration_days: 30, sessions: 4, trainer_id: 2, is_active: true, features: ['4 yoga sessions', 'Breathing techniques', 'Flexibility assessment'] },
  { id: 5, name: 'Mindful Movement', title: 'Mindful Movement', description: 'Combine yoga and pilates for balanced fitness.', price: 2800, duration_days: 60, sessions: 8, trainer_id: 2, is_active: true, features: ['8 mixed sessions', 'Personalized sequences', 'Meditation guidance'] },
  { id: 6, name: 'HIIT Blast', title: 'HIIT Blast', description: 'High-intensity workouts for fast results.', price: 3200, duration_days: 30, sessions: 6, trainer_id: 3, is_active: true, features: ['6 HIIT sessions', 'Heart rate monitoring', 'Progress tracking'] },
  { id: 7, name: 'Total Transformation', title: 'Total Transformation', description: 'Complete lifestyle overhaul for lasting results.', price: 4000, duration_days: 90, sessions: 12, trainer_id: 4, is_active: true, features: ['12 coaching sessions', 'Custom meal plans', 'Grocery shopping guide', 'Recipe book', 'Daily support'] }
];

const mockReviews = [
  { name: 'Khaled Mansour', rating: 5, comment: 'Ahmed completely transformed my body and mindset. I lost 15kg in 3 months!' },
  { name: 'Fatma Hassan', rating: 5, comment: "Sara's yoga classes are amazing. I've never felt more flexible and at peace." },
  { name: 'Youssef Adel', rating: 4, comment: "Omar's HIIT sessions are intense but worth every minute. Great results!" }
];

const mockBookings = [
  { id: 1, user_id: 1, user_name: 'Yousef Sheha', trainer_id: 1, trainer_name: 'Ahmed Hassan', booking_date: '2026-09-20', start_time: '10:00', end_time: '11:00', status: 'confirmed', amount: 500, is_paid: true },
  { id: 2, user_id: 1, user_name: 'Yousef Sheha', trainer_id: 2, trainer_name: 'Sara Mohamed', booking_date: '2026-09-22', start_time: '14:00', end_time: '15:00', status: 'pending', amount: 400, is_paid: false }
];

const mockUser = {
  id: 1,
  name: 'Yousef Sheha',
  email: 'yousef@example.com',
  phone: '+201234567890',
  profile_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  dob: '1995-06-15',
  created_at: '2026-01-10T08:00:00.000Z'
};

const mockSessions = [
  { id: 1, trainer_id: 1, booking_id: 1, session_date: '2026-09-20', start_time: '10:00', end_time: '11:00', status: 'scheduled', notes: 'Focus on upper body strength' },
  { id: 2, trainer_id: 2, booking_id: 2, session_date: '2026-09-22', start_time: '14:00', end_time: '15:00', status: 'scheduled', notes: 'Morning yoga flow session' }
];
const mockPurchases = [
  { id: 1, user_id: 1, trainer_package_id: 2, purchase_date: '2026-09-01', expiry_date: '2026-10-31', status: 'active', amount_paid: 3200, package_name: 'Pro Package', package_description: 'For those ready to take their fitness to the next level.', duration_days: 60 }
];

const mockProgressActivity = [
  { id: 1, user_id: 1, activity_type: 'weight', value: 82.5, unit: 'kg', activity_date: '2026-09-01' },
  { id: 2, user_id: 1, activity_type: 'weight', value: 81.8, unit: 'kg', activity_date: '2026-09-05' },
  { id: 3, user_id: 1, activity_type: 'weight', value: 81.2, unit: 'kg', activity_date: '2026-09-08' },
  { id: 4, user_id: 1, activity_type: 'body_fat', value: 22.5, unit: '%', activity_date: '2026-09-01' },
  { id: 5, user_id: 1, activity_type: 'body_fat', value: 22.0, unit: '%', activity_date: '2026-09-08' },
  { id: 6, user_id: 1, activity_type: 'steps', value: 8500, unit: 'steps', activity_date: '2026-09-10' },
  { id: 7, user_id: 1, activity_type: 'water', value: 2.5, unit: 'liters', activity_date: '2026-09-10' }
];

const mockWorkoutHistory = [
  { id: 1, user_id: 1, workout_name: 'Upper Body Strength', description: 'Chest, shoulders, and triceps workout', duration_minutes: 60, calories_burned: 450, workout_date: '2026-09-15' },
  { id: 2, user_id: 1, workout_name: 'Morning Yoga', description: 'Vinyasa flow for flexibility and balance', duration_minutes: 45, calories_burned: 200, workout_date: '2026-09-14' },
  { id: 3, user_id: 1, workout_name: 'HIIT Cardio', description: 'High-intensity interval cardio session', duration_minutes: 30, calories_burned: 400, workout_date: '2026-09-13' },
  { id: 4, user_id: 1, workout_name: 'Lower Body Power', description: 'Legs and glutes strength training', duration_minutes: 55, calories_burned: 420, workout_date: '2026-09-12' },
  { id: 5, user_id: 1, workout_name: 'Full Body Stretch', description: 'Cool-down and flexibility session', duration_minutes: 20, calories_burned: 80, workout_date: '2026-09-11' }
];

const mockPayments = [
  { id: 1, user_id: 1, booking_id: 1, amount: 500, payment_method: 'credit_card', status: 'completed', stripe_payment_id: 'pi_mock_12345', created_at: '2026-09-15T10:30:00.000Z' },
  { id: 2, user_id: 1, booking_id: 2, amount: 400, payment_method: 'credit_card', status: 'pending', stripe_payment_id: 'pi_mock_67890', created_at: '2026-09-16T14:00:00.000Z' }
];

const mockCards = [
  { id: 1, last4: '4242', brand: 'visa', exp_month: 12, exp_year: 2028, is_default: true },
  { id: 2, last4: '8888', brand: 'mastercard', exp_month: 6, exp_year: 2027, is_default: false }
];

const mockNotifications = [
  { id: 1, user_id: 1, title: 'Booking Confirmed', message: 'Your session with Ahmed Hassan is confirmed for Sep 20.', type: 'booking', is_read: false, created_at: '2026-09-15T10:31:00.000Z' },
  { id: 2, user_id: 1, title: 'Payment Reminder', message: 'You have a pending payment of 400 EGP.', type: 'payment', is_read: true, created_at: '2026-09-16T14:01:00.000Z' }
];

const mockConversations = [
  { id: 1, user1_id: 1, user2_id: 101, created_at: '2026-09-10T08:00:00.000Z', last_message_at: '2026-09-18T15:30:00.000Z' }
];

const mockMessages = [];
const mockData = {
  '/trainers': { data: { success: true, data: mockTrainers } },
  '/search': { data: { success: true, data: mockSearchResults } },
  '/search/searchFilter': { data: { success: true, data: mockSearchResults } },
  '/specializations': { data: { success: true, data: mockSpecializations } },
  '/packages': { data: { success: true, data: mockPackages } },
  '/landing/stats': { data: { total_trainers: 6, total_packages: 7, total_sessions: 150, total_users: 50 } },
  '/landing/packages': { data: { success: true, data: mockPackages.slice(0, 3) } },
  '/landing/reviews': { data: { success: true, data: mockReviews } },
  '/bookings': { data: { success: true, data: mockBookings } },
  '/profile': { data: { success: true, user: mockUser } },
  '/profile/sessions': { data: { success: true, data: mockSessions } },
  '/profile/packages': { data: { success: true, data: mockPackages.slice(0, 3) } },
  '/my-packages': { data: { success: true, data: mockPurchases } },
  '/profile/progress-activity': { data: { success: true, data: mockProgressActivity } },
  '/profile/workout-history': { data: { success: true, data: mockWorkoutHistory } },
  '/payments-history': { data: { success: true, data: mockPayments } },
  '/cards': { data: { success: true, data: mockCards } },
  '/notifications': { data: { success: true, data: mockNotifications } },
  '/conversations': { data: { success: true, data: mockConversations } },
  '/messages': { data: { success: true, data: mockMessages } },
  '/login': { data: { success: true, data: { id: 1, name: 'Yousef Sheha', email: 'yousef@example.com', token: 'mock_jwt_token_12345', profile_image: null } } },
  '/register': { data: { success: true, data: { id: 1, name: 'Yousef Sheha', email: 'yousef@example.com', token: 'mock_jwt_token_12345', profile_image: null } } }
};

export const getMockResponse = (url, params) => {
  const cleanUrl = url.split('?')[0];

  // Handle single trainer: /trainers/:id
  const trainerMatch = cleanUrl.match(/^\/trainers\/(\d+)$/);
  if (trainerMatch) {
    const id = parseInt(trainerMatch[1]);
    const trainer = mockTrainers.find((t) => t.id === id);
    if (trainer) return { data: { success: true, data: trainer } };
    return { data: { success: true, data: mockTrainers[0] } };
  }

  // Handle trainer sub-routes: /trainers/:id/schedule, /trainers/:id/availability
  if (cleanUrl.match(/^\/trainers\/\d+\/(schedule|availability)$/)) {
    if (cleanUrl.endsWith('/schedule')) return { data: { success: true, data: mockSessions } };
    if (cleanUrl.endsWith('/availability')) return { data: { success: true, data: { trainer_id: 1, available: true } } };
  }

  // Handle landing trainers: /landing/trainers/:id
  const landingTrainerMatch = cleanUrl.match(/^\/landing\/trainers\/(\d+)$/);
  if (landingTrainerMatch) {
    const id = parseInt(landingTrainerMatch[1]);
    const trainer = mockTrainers.find((t) => t.id === id);
    if (trainer) return { data: { success: true, data: trainer } };
    return { data: { success: true, data: mockTrainers[0] } };
  }

  // Handle packages trainers: /packages/:id/trainers
  const pkgTrainerMatch = cleanUrl.match(/^\/packages\/\d+\/trainers$/);
  if (pkgTrainerMatch) {
    return { data: { success: true, data: [mockTrainers[0]] } };
  }

  // Handle conversations messages: /conversations/:id/messages
  if (cleanUrl.match(/^\/conversations\/\d+\/messages$/)) {
    return { data: { success: true, data: mockMessages } };
  }

  // Handle single notification/conversation/card/booking operations
  if (cleanUrl.match(/^\/(notifications|cards|bookings)\/\d+\/(mark-read|delete|cancel|pay|confirm|reschedule|read)$/) ||
      cleanUrl.match(/^\/(notifications|cards)\/\d+\/delete$/)) {
    return { data: { success: true, message: "Success (mock)" } };
  }

  if (mockData[cleanUrl]) {
    return mockData[cleanUrl];
  }

  // Fallback: check if url starts with a mock key (for search with params etc.)
  for (const [key, value] of Object.entries(mockData)) {
    if (cleanUrl.startsWith(key + '/') && cleanUrl !== key) {
      return value;
    }
  }

  return { data: { success: true, data: [] } };
};

export default mockData;
