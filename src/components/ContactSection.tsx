
import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "emailjs-com";

// These are the public keys for EmailJS
// They are meant to be in the frontend code
const EMAILJS_SERVICE_ID = "default_service"; // You'll need to replace this with your actual service ID
const EMAILJS_TEMPLATE_ID = "template_contact"; // You'll need to replace this with your actual template ID
const EMAILJS_USER_ID = "YOUR_USER_ID"; // You'll need to replace this with your actual user ID

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare the template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "pedro.vitorino.lima@gmail.com"
      };
      
      // Send the email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      // Show success message
      toast({
        title: "Mensagem enviada!",
        description: "Agradecemos pelo seu contato. Retornaremos em breve.",
      });
      
      // Reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Houve um problema ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Estou disponível para novos projetos e parcerias
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Vamos transformar sua ideia em realidade
              </h3>
              <p className="text-gray-600">
                Se você está procurando um desenvolvedor para criar seu site ou aplicação web, 
                entre em contato. Estou pronto para ajudar a transformar sua visão em um 
                produto digital de qualidade.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-primary-100 text-primary-600 rounded-full mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Localização</h4>
                  <p className="text-gray-600">Rua Porto Rico, 3399 - Jales, São Paulo, Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-primary-100 text-primary-600 rounded-full mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">pedro.vitorino.lima@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-primary-100 text-primary-600 rounded-full mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Telefone</h4>
                  <p className="text-gray-600">+55 17 99705-2846</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-medium text-gray-800 mb-2">Horário de Trabalho</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Segunda - Sexta:</span>
                  <span>8:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Sábado:</span>
                  <span>9:00 - 13:00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Envie uma mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem aqui..."
                  required
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Enviando..." : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send size={16} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
