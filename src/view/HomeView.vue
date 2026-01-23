<script setup>
// import { ref, reactive } from 'vue'
// import  from ''

</script>

<template>
    <!-- Hero Section -->
    <section class="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-b from-green-100 via-green-200 to-white">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6" data-aos="fade-up" data-aos-duration="1000">
            Islamic Knowledge Hub
        </h1>
        <p class="text-lg md:text-2xl mb-8 text-gray-700" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            Explore Hadith, Quranic verses, and Islamic teachings in Arabic, Urdu, English, and Bangla.
        </p>
        <a href="#hadith-section" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105 shadow-lg" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="400">
            Explore Hadith
        </a>
    </section>

    <!-- Hadith Section -->
    <section id="hadith-section" class="bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-up">Hadith Collection</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                
                <!-- Card Example -->
                <div class="bg-green-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="fade-up" data-aos-duration="800">
                    <p class="arabic text-2xl mb-4">عن عمر بن الخطاب رضي الله عنه قال: سمعت رسول الله ﷺ يقول...</p>
                    <p class="text-lg font-semibold mb-2">English:</p>
                    <p class="text-gray-700 mb-2">I heard Allah's Messenger (ﷺ) say, "The reward of deeds depends upon the intentions..."</p>
                    <p class="text-lg font-semibold mb-2">Bangla:</p>
                    <p class="text-gray-700 mb-2">কর্মের প্রতিদান নির্ভর করে উদ্দেশ্যের উপর, প্রতিটি ব্যক্তি সেই অনুযায়ী পুরস্কৃত হবে যা সে উদ্দেশ্য করেছে।</p>
                    <p class="text-lg font-semibold">Urdu:</p>
                    <p class="text-gray-700">اعمال کا اجر نیت پر منحصر ہے، ہر شخص وہی اجرت پائے گا جو اس نے ارادہ کیا۔</p>
                </div>

                <!-- Add more cards for scroll effect -->
                <div class="bg-green-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <p class="arabic text-2xl mb-4">قال رسول الله ﷺ: إنما الأعمال بالنيات...</p>
                    <p class="text-lg font-semibold mb-2">English:</p>
                    <p class="text-gray-700 mb-2">Actions are judged by intentions, so each person will receive reward according to what he intended.</p>
                    <p class="text-lg font-semibold mb-2">Bangla:</p>
                    <p class="text-gray-700 mb-2">কর্মগুলো নিতির দ্বারা বিচার করা হয়, তাই প্রত্যেকে তার উদ্দেশ্যের অনুযায়ী পুরস্কৃত হবে।</p>
                    <p class="text-lg font-semibold">Urdu:</p>
                    <p class="text-gray-700">اعمال کا دارومدار نیتوں پر ہے، ہر شخص اپنی نیت کے مطابق اجر پائے گا۔</p>
                </div>

                <div class="bg-green-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <p class="arabic text-2xl mb-4">عن أبي هريرة رضي الله عنه قال: قال رسول الله ﷺ...</p>
                    <p class="text-lg font-semibold mb-2">English:</p>
                    <p class="text-gray-700 mb-2">The Prophet ﷺ said: Whoever guides someone to goodness will have a reward like that of the one who does it.</p>
                    <p class="text-lg font-semibold mb-2">Bangla:</p>
                    <p class="text-gray-700 mb-2">যে কেউ কারোকে ভালো কাজের পথে পরিচালিত করবে, তারও একই পুরস্কার থাকবে।</p>
                    <p class="text-lg font-semibold">Urdu:</p>
                    <p class="text-gray-700">جو شخص کسی کو نیکی کی طرف رہنمائی کرے گا، اس کا بھی اتنا ہی اجر ہوگا جتنا عمل کرنے والے کا۔</p>
                </div>

            </div>
        </div>
    </section>

    <!-- Quran Section -->
    <section class="bg-gradient-to-r from-green-100 via-green-200 to-green-50">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-right">Quran Verses</h2>
            <div class="space-y-10">
                <div class="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="fade-left">
                    <p class="arabic text-2xl mb-4">إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى</p>
                    <p class="text-gray-700 text-lg">English: Actions are judged by intentions, so each person will receive reward according to what he intended.</p>
                </div>
                <div class="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="fade-right">
                    <p class="arabic text-2xl mb-4">وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ</p>
                    <p class="text-gray-700 text-lg">English: And We have not sent you, [O Muhammad], except as a mercy to the worlds.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Tips Section -->
    <section class="bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-up">Daily Islamic Tips</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-green-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="flip-left">
                    <p class="text-lg font-semibold mb-2">Tip 1</p>
                    <p class="text-gray-700">Start your day with Fajr prayer and read 1 Hadith for inspiration.</p>
                </div>
                <div class="bg-green-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="flip-left" data-aos-delay="200">
                    <p class="text-lg font-semibold mb-2">Tip 2</p>
                    <p class="text-gray-700">Recite Quran verses daily for spiritual peace and guidance.</p>
                </div>
                <div class="bg-green-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105" data-aos="flip-left" data-aos-delay="400">
                    <p class="text-lg font-semibold mb-2">Tip 3</p>
                    <p class="text-gray-700">Share Islamic knowledge with family and friends for rewards.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
 
</style>