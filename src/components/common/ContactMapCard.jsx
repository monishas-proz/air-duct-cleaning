export default function ContactMapCard() {
  return (
    <div className="overflow-hidden rounded-xl shadow-sm">
      <iframe
        title="Air Care Management Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.3585433403164!2d78.28192607483285!3d12.492377687780722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac3500168aac83%3A0xd2ee2bc7892e9500!2sAnchoor%20post%20office!5e0!3m2!1sen!2sin!4v1784296184873!5m2!1sen!2sin"
        className="h-64 w-full border-0 md:h-72 lg:h-[320px]"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}