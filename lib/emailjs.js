export const EMAILJS_CONFIG = {
  serviceId:
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_sh0ikg1",
  templateId:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_g9ff0kb",
  publicKey:
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "1JHL0ihQs_r00CFZn",
};

/** Keys must match {{placeholders}} in EmailJS template `template_g9ff0kb`. */
export function buildInquiryTemplateParams(form) {
  const data = new FormData(form);

  const contact_name = String(data.get("contact_name") ?? "").trim();
  const organization = String(data.get("organization") ?? "").trim();
  const corporate_email = String(data.get("corporate_email") ?? "").trim();
  const project_type = String(data.get("project_type") ?? "").trim();
  const project_requirements = String(
    data.get("project_requirements") ?? ""
  ).trim();

  return {
    contact_name,
    organization,
    corporate_email,
    project_type,
    project_requirements,
    reply_to: corporate_email,
    from_name: contact_name,
    from_email: corporate_email,
    name: contact_name,
    company: organization,
    email: corporate_email,
    type: project_type,
    message: project_requirements,
    user_name: contact_name,
    user_email: corporate_email,
  };
}
