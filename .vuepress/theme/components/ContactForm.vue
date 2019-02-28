<template>
  <section class="bg-blue">
    <div class="container mx-auto font-serif font-semibold">

      <form class="w-full sm:flex" name="contact" method="POST" netlify>

        <div class="p-4 sm:w-1/3 my-4">
          <h3 class="text-white text-left mb-3 text-3xl">Get in touch.</h3>
          <p class="text-green font-sans-serif font-medium text-left text-base">If your organisation wants to drive innovation, we are here to support you.</p>
        </div>

        <div class="mx-4 p-4 sm:w-1/3 my-4">

          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-green text-xs font-bold font-sans-serif mb-2" for="name">
              Your Name
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 font-sans-serif"
              name="name" id="name" type="text" placeholder="Your name" required>
          </div>

          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-green text-xs font-bold font-sans-serif mb-2" for="organisaion">
              Organisation Name
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 font-sans-serif"
              name="organisaion" id="organisaion" type="text" placeholder="Your organisation">
          </div>

          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-green text-xs font-bold font-sans-serif mb-2" for="email">
              Email
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 font-sans-serif"
              name="email" id="email" type="email" placeholder="name@email.com" required>
          </div>

        </div>

        <div class="mx-4 p-4 sm:w-1/3 my-4">
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-green text-xs font-bold font-sans-serif mb-2" for="comments">
                Enquiry
              </label>
              <textarea rows="6" class="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 font-sans-serif"
                name="comments" id="comments" type="text" placeholder="Tell us a little about your project" required></textarea>
            </div>
          </div>

          <div class="flex justify-end mb-2">
            <button class="text-xl border-b-2 block py-2 px-8 border-white leading-none bg-white text-blue shadow-green font-bold whitespace-no-wrap hover:bg-green hover:shadow-white hover:text-white hover:border-green"
              type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>