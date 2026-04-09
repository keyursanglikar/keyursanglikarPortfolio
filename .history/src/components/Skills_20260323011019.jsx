/* Java Icon Gradient Effect */
.java-icon {
  font-size: 48px;
  background: linear-gradient(135deg, #ff5500, #007396);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: all 0.3s ease;
}

/* Java icon wrapper animation */
.skill-card:has(.java-icon) .skill-icon-wrapper {
  position: relative;
  transition: all 0.3s ease;
}

/* Glow effect on hover */
.skill-card:has(.java-icon):hover .java-icon {
  filter: drop-shadow(0 0 10px rgba(255, 85, 0, 0.6));
  animation: javaPulse 1.5s ease-in-out infinite;
}

/* Java icon animation */
@keyframes javaPulse {
  0%, 100% {
    text-shadow: 0 0 5px rgba(255, 85, 0, 0.5);
    transform: scale(1);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 115, 150, 0.8);
    transform: scale(1.05);
  }
}

/* Optional: Add flame effect on hover */
.skill-card:has(.java-icon):hover .skill-icon-wrapper::before {
  content: '🔥';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  animation: flameFlicker 0.5s ease-in-out infinite;
  opacity: 0;
  animation: flameAppear 0.3s ease forwards, flameFlicker 0.5s ease-in-out infinite;
}

@keyframes flameAppear {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes flameFlicker {
  0%, 100% {
    opacity: 0.8;
    transform: translateX(-50%) translateY(0) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) translateY(-3px) scale(1.1);
  }
}