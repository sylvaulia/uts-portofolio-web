const sequelize = require('./config');
const Profile = require('../models/Profile');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Project = require('../models/Project');

async function seed() {
  await sequelize.sync({ force: true });
  console.log('Tables created.');

  await Profile.create({
    name: 'Sylva Aulia',
    headline: 'Fullstack Web Developer',
    bio: 'Saya adalah mahasiswa Sistem Teknologi dan Informasi dengan minat di bidang web development. Suka belajar teknologi baru dan selalu antusias untuk membangun sesuatu yang suatu hari bisa bermanfaat bagi orang lain.',
    photo_url: '/images/foto-sylva.jpeg',
    email: 'sylva9697@gmail.com',
    phone: '+62 85710386548',
    location: 'Bogor, Indonesia',
    cv_url: '/images/cv-sylva.pdf',
    github_url: 'https://github.com/sylvaulia',
    linkedin_url: 'https://linkedin.com/in/sylva-aulia',
    instagram_url: 'https://instagram.com/_sylvaulia',
  });

  await Skill.bulkCreate([
    { name: 'JavaScript', category: 'Language', icon: 'JS', level: 85 },
    { name: 'HTML & CSS', category: 'Language', icon: 'HTML', level: 90 },
    { name: 'Vue.js', category: 'Framework', icon: 'Vue', level: 75 },
    { name: 'Express.js', category: 'Framework', icon: 'EX', level: 70 },
    { name: 'Git & GitHub', category: 'Tools', icon: 'Git', level: 80 },
    { name: 'Problem Solving', category: 'Soft Skill', icon: 'PS', level: 85 },
  ]);

  await Experience.bulkCreate([
    {
      company: 'ITB Dewantara',
      position: 'Mahasiswa Sistem Teknologi dan Informasi',
      start_date: 'Sep 2024',
      end_date: 'Sekarang',
      is_current: true,
      description: 'Mempelajari dasar-dasar pemrograman, algoritma, figma, dan pengembangan web sebagai bagian dari kurikulum.',
    },
    {
      company: 'Proyek Mandiri',
      position: 'Web Developer',
      start_date: 'Mei 2026',
      end_date: 'Mei 2026',
      is_current: true,
      description:'Membangun  personal web portofolio website menggunakan Vue.js, Express.js, dan SQLite',
    },
  ]);

  await Project.bulkCreate([
    {
      name: 'Personal Portfolio Website',
      description: 'Website portfolio pribadi dengan data dinamis dari backend Express dan database SQLite.',
      image_url: '/images/project2.png',
      tech_stack: 'Vue.js,Express.js,SQLite,Tailwind CSS',
      demo_url: '#',
      github_url: 'https://github.com/sylvaulia/uts-portofolio-web',
      category: 'Web',
    },
    {
      name: 'Taks Manager App',
      description: 'Aplikasi manajemen sederhana dengan fitur CRUD dan filter status menggunakan JavaScript.',
      image_url: '/images/project1.png',
      tech_stack: 'PHP,MySQL,Bootstrap',
      demo_url: '#',
      github_url: 'https://github.com/sylvaulia/uts-portofolio-web',
      category: 'Web',
    },
  ]);

  console.log('Seed data inserted successfully!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});