এই ফোল্ডারে আপনার ৭০টা আসল ছবি আপলোড করুন, ঠিক এই নামগুলো দিয়ে (index.html-এর script.js
ফাইলে galleryPhotos array-তে এই একই ফাইলনেমগুলো রেফারেন্স করা আছে):

1787550810891.jpg
1787551269477.jpg
1787551605652.jpg
... (মোট ৭০টা — script.js এর galleryPhotos array দেখুন সম্পূর্ণ লিস্টের জন্য)

ভবিষ্যতে নতুন ছবি অ্যাড করতে:
1. নতুন ছবি এই ফোল্ডারে (images/gallery/) আপলোড করুন
2. script.js ফাইলে galleryPhotos array-এর শেষে একটা নতুন লাইন যোগ করুন, যেমন:
   { src: "images/gallery/NEW_FILENAME.jpg", alt: "...", caption: "Craft Detail — Photo 71" },
3. ব্যস — গ্রিড, লাইটবক্স, জুম, WhatsApp বাটন সব অটোমেটিক নতুন ছবির জন্যও কাজ করবে।
