const PDFDocument = require('pdfkit');
const fs = require('fs');

async function generatePDF() {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const stream = fs.createWriteStream('public/pre-lead-sales-precautions.pdf');
    
    doc.pipe(stream);

    doc.fontSize(24).text('The Pre-Ad Sales Playbook', { align: 'center' });
    doc.moveDown();

    doc.fontSize(16).text('Core Message', { underline: true });
    doc.fontSize(12).text('Before we spend a single Rupee on ads, we must fix your sales process.');
    doc.text('Scaling a broken system only accelerates failure. Fix the leaks, then fuel the fire.');
    doc.moveDown();

    doc.fontSize(16).text('Maximizing Ad ROI', { underline: true });
    doc.fontSize(12).text('Most businesses burn thousands on ads and blame the leads. 9/10 times, the leads aren\'t bad—your sales process is broken.');
    doc.text('Fix these leaks before you spend another Rupee. Implement the exact playbook to scale your business to the moon.');
    doc.moveDown();

    doc.fontSize(16).text('The Script & The Rehearsal', { underline: true });
    doc.fontSize(12).text('"We cannot shoot a great movie without a Script and Rehearsal."');
    doc.text('Think of your sales calls like a movie production.');
    doc.text('Most teams treat calls like an improv show—where every rep just says whatever comes to mind. This is how you burn ROI.');
    doc.moveDown();

    doc.fontSize(16).text('Stop Burning Your Budget', { underline: true });
    doc.fontSize(12).text('"Do not practice on paid leads. Practice in Roleplay."');
    doc.text('Untrained reps practicing on paid leads is the biggest crime in SMB sales.');
    doc.text('Establish a strict bootcamp: No rep touches a lead until they pass a roleplay test. This rule saves thousands.');
    doc.moveDown();

    doc.fontSize(16).text('Sell the Next Step, Not the Product', { underline: true });
    doc.fontSize(12).text('"The goal of the first call is to sell the Consultation/Demo, not the service."');
    doc.text('When an ad lead comes in, initial callers talk too much. The only goal of that rapid-response call is booking the official consultation.');
    doc.text('Follow these 4 micro-commitments to pack your calendar with qualified prospects:');
    doc.text('1. The Hook: "Hi, you clicked our ad for [Service]. I\'m calling to get you the details."');
    doc.text('2. Hard Qualify: "Are you looking to solve this immediately?" (Filters time-wasters).');
    doc.text('3. Pain/Desire: "What problem are you looking to solve today?"');
    doc.text('4. The Commitment: "I need to show you how it works. Are you available Tuesday at 10 AM?"');
    doc.moveDown();

    doc.fontSize(16).text('The Closer as the Doctor', { underline: true });
    doc.fontSize(12).text('"The Closer prescribes your service as the cure."');
    doc.text('Most salespeople act like brochure readers, listing features and asking if they want to buy.');
    doc.text('A doctor diagnoses the pain first. When closers act like doctors, your close rate doubles.');
    doc.text('Diagnostic Process:');
    doc.text('Clarify: "Tell me how X is impacting you."');
    doc.text('Sell: "Since you want to fix X, our system does that."');
    doc.text('Address: Handle concerns before they are asked.');
    doc.text('Decision: "Are we ready to get this started today?"');
    doc.moveDown();

    doc.fontSize(16).text('The Goal of Management', { underline: true });
    doc.fontSize(12).text('"Management is NOT to ask \'How many deals?\' It is to fix mistakes."');
    doc.text('What We See: Managers ask, "Why aren\'t they buying?" The reps reply, "The leads are bad." Nothing gets fixed.');
    doc.text('The Solution: Mandate 1 Hour Per Week, Per Rep for Call Review. Go to the game tape. Do not accept excuses.');
    doc.text('Weekly Call Review (1 HR):');
    doc.text('30 Mins: Manager listens to recorded calls from the week.');
    doc.text('5 Mins: Manager identifies the ONE mistake the rep keeps making.');
    doc.text('25 Mins: Manager and Rep roleplay that exact objection over and over.');
    doc.moveDown();

    doc.fontSize(16).text('The Culture of Accountability', { underline: true });
    doc.fontSize(12).text('"Culture is what we tolerate. We demand excellence."');
    doc.text('What We See: People hiding behind excuses. "Lead quality is bad," "The market is slow."');
    doc.text('What It Means: Create extreme transparency. If a lead isn\'t called in 5 mins, the rep is held accountable.');
    doc.text('The Result: A predictable, scalable system that converts traffic into revenue.');
    doc.text('Ready to Scale?');
    doc.text('Speed to Lead: Under 5 minutes or the lead is dead. No more hiding.');
    doc.text('Visual Board: Put numbers on the board. Let salespeople compete.');

    doc.end();

    stream.on('finish', () => {
      resolve();
    });
    
    stream.on('error', reject);
  });
}

generatePDF().then(() => console.log('PDF generated successfully')).catch(console.error);
